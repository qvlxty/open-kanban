import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Project } from './project.entity';

@Module({
  imports: [MikroOrmModule.forFeature([
    Project
  ])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
