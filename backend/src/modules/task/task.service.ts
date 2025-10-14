import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { UpdateTaskDto } from './dto/UpdateTask.dto';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: EntityRepository<Task>,
  ) { }
  create({ stageId, ...v }: CreateTaskDto, userId: number) {
    this.taskRepo.insert({
      ...v,
      stage: stageId,
      user: userId
    });
  }

  read() {
    return this.taskRepo.findAll();
  }

  getOne(id: number) {
    return this.taskRepo.findOneOrFail({ id });
  }

  async update(id: number, {stageId, ...data}: UpdateTaskDto) {
    await this.taskRepo.nativeUpdate({ id }, {
      ...data,
      stage: stageId ? stageId : undefined
    });
  }

  async updateOrder(data: UpdateOrderDto) {
    await Promise.all(data.orderItems.map(({ id, order }) =>
      this.taskRepo.nativeUpdate({ id: Number(id) }, { order }))
    )
  }
  async delete(id: number) {
    await this.taskRepo.nativeDelete({ id: Number(id) });
  }


  public timetable(userId: number) {
    return this.taskRepo.createQueryBuilder('r')
      .where('r.userId = ? and r.interviewDate > CURRENT_DATE',[userId])
      .orderBy({ interviewDate: 'ASC' })
      .leftJoinAndSelect('r.stage', 'v')
      .getResult()
  }
}
