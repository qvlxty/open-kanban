import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { StageService } from './stage.service';
import { JwtAuthGuard } from 'src/auth/auth.gurad';
import { CreateStageDto } from './dto/CreateStage.dto';
import { UpdateStageDto } from './dto/UpdateStage';

@Controller('/stages')
@UseGuards(JwtAuthGuard)
export class StageController {
  constructor(private readonly stageService: StageService) { }

  @Post()
  create(@Body() data: CreateStageDto) {
    return this.stageService.create(data);
  }

  @Get()
  async getKanban() {
    return this.stageService.getKanban()
  }

  @Get('/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.stageService.getOne(id);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStageDto
  ) {
    await this.stageService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.stageService.delete(id);
  }


}
