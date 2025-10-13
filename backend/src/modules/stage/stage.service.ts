import { Injectable } from '@nestjs/common';
import { UpdateVacancyDto } from './dto/updateVacancy.dto';
import { CreateVacancyDto } from './dto/vacancy.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Task } from '../task/task.entity';
import { Stage } from './stage.entity';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private stageRepo: EntityRepository<Stage>,
    @InjectRepository(Task)
    private taskRepo: EntityRepository<Task>,
  ) { }

  create(v: CreateVacancyDto) {
    this.stageRepo.insert(v);
  }

  getOne(id: number) {
    return this.stageRepo.findOne({ id });
  }

  async update(id: number, data: UpdateVacancyDto) {
    await this.stageRepo.nativeUpdate({ id }, data);
  }
  async delete(id: number) {
    await this.stageRepo.nativeDelete({ id });
  }

  // getVacanciesWithRespondents() {
  //   const baseSelectedRows = [
  //     'u.id', 'u.fio', 'u.login',
  //     'r.id', 'r.title', 'r.status', 'r.interviewDate', 'r.resumeUrl'
  //   ]
  //   return Promise.all(
  //     [
  //       this.vacancyRepository
  //         .createQueryBuilder('v')
  //         .leftJoinAndSelect('v.respondents', 'r')
  //         .orderBy('v.id')
  //         .addOrderBy('r.order')
  //         .leftJoin('r.user', 'u')
  //         .select([...baseSelectedRows, 'v.id', 'v.title', 'v.stack', 'v.isOpen'])
  //         .getMany(),
  //       this.respondentRepo
  //         .createQueryBuilder('r')
  //         .where('r.vacancy_id is null')
  //         .addOrderBy('r.order')
  //         .leftJoin('r.user', 'u')
  //         .select(baseSelectedRows)
  //         .getMany()
  //     ]
  //   )
  // }


}
