import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class ProjectService {
    constructor (
        @InjectRepository(Project)
        private readonly projectRepo: EntityRepository<Project>
    ) {}

    list() {
        return this.projectRepo.findAll()
    }

    create(title: string) {
        return this.projectRepo.insert({ title })
    }

    delete(id: number) {
        return this.projectRepo.nativeDelete({ id })
    }
    update(id: number, title: string) {
        return this.projectRepo.nativeUpdate(
            { id },
            { title }
        )
    }
}
