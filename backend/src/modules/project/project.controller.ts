import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.gurad';
import { ProjectService } from './project.service';

@Controller('projects')
@UseGuards(JwtAuthGuard)
export class ProjectController {

    constructor(
        private readonly projectService: ProjectService,
    ) {}

    @Get()
    list() {
        return this.projectService.list()
    }

    @Post()
    create(@Body() body: {title: string}) {
        return this.projectService.create(body.title)
    }

    @Delete('/:id')
    delete(@Param('id',ParseIntPipe) id: number) {
        return this.projectService.delete(id)
    }
    @Patch('/:id')
    update(
        @Param('id',ParseIntPipe) id: number,
        @Body() body: { title:string }
    ) {
        return this.projectService.update(id, body.title)
    }
}
