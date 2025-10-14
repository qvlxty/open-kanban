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
  ) { }

  create({ projectId, ...v }: CreateStageDto) {
    this.stageRepo.insert({
      ...v,
      project: projectId
    });
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

  getKanban(projectId: number) {
    return this.stageRepo.findAll({
      where: { project: projectId, },
      fields: ['id','title','tasks.id','tasks.order','tasks.createdDateAt','tasks.dueDate','tasks.title'],
      populate: ['tasks', 'tasks.user'],
      orderBy: {
        id: 'asc',
        tasks: {
          order: 'asc'
        }
      }
    })
  }


}
