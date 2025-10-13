import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.gurad';
import { ProjectService } from './project.service';

@Controller('project')
@UseGuards(JwtAuthGuard)
export class ProjectController {

    constructor(
        private readonly projectService: ProjectService,
    ) {}

    @Get()
    projectList() {

    }

    @Post()
    createProject() {

    }

    @Post()
    deleteProject() {

    }
}
