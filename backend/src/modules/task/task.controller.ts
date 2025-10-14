import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';
import { UpdateTaskDto } from './dto/UpdateTask.dto';
import { JwtAuthGuard } from 'src/auth/auth.gurad';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { User } from '../user/user.entity';

@Controller('/tasks')
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post('/')
  create(
    @Body() data: CreateTaskDto,
    @CurrentUser() user: User
  ) {
    return this.taskService.create(data, user.id);
  }

  @Get('/timetable')
  timetable(@Req() req) {
    return this.taskService.timetable(req.user.id)
  }

  @Get()
  read() {
    return this.taskService.read();
  }

  @Get('/:id')
  getrespondent(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getOne(id);
  }

  @Patch('/order')
  async update(@Body() data: UpdateOrderDto) {
    await this.taskService.updateOrder(data);
    return 'Задача обновлена';
  }

  @Patch('/:id')
  async order(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTaskDto) {
    await this.taskService.update(id, data);
    return 'Задача обновлена';
  }


  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.taskService.delete(id);
    return 'Запись удалена';
  }

}
