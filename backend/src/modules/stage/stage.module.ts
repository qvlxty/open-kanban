import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Task } from '../task/task.entity';
import { Stage } from './stage.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Stage, Task])],
  controllers: [StageController],
  providers: [StageService],
  exports: [StageService],
})
export class StageModule { }
