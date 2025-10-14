import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, raw } from '@mikro-orm/postgresql';
import { Task } from '../task/task.entity';
import { Stage } from './stage.entity';
import { CreateStageDto } from './dto/CreateStage.dto';
import { UpdateStageDto } from './dto/UpdateStage';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private stageRepo: EntityRepository<Stage>,
    @InjectRepository(Task)
    private taskRepo: EntityRepository<Task>,
  ) { }

  create(v: CreateStageDto) {
    this.stageRepo.insert(v);
  }

  getOne(id: number) {
    return this.stageRepo.findOne({ id });
  }

  async update(id: number, data: UpdateStageDto) {
    await this.stageRepo.nativeUpdate({ id }, data);
  }
  async delete(id: number) {
    await this.stageRepo.nativeDelete({ id });
  }

  getKanban() {
    const baseSelectedRows = [
      'u.id', 'u.name', 'u.login',
      't.id', 't.title', 't.dueDate',
    ]
    return Promise.all(
      [
        this.stageRepo
          .createQueryBuilder('v')
          .leftJoinAndSelect('v.tasks', 't')
          .orderBy({ id: 'asc' })
          .orderBy({ tasks: { order: 'asc' }})
          .leftJoin('t.user', 'u')
          .select([...baseSelectedRows, 'v.id', 'v.title'])
          .getResult(),
        this.taskRepo
          .createQueryBuilder('t')
          .where({ stage: null })
          .orderBy({ order: 'asc' })
          .leftJoin('t.user', 'u')
          .select(baseSelectedRows)
          .getResult()
      ]
    )
  }


}
