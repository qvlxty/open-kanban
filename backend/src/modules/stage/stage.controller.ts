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
import { CreateVacancyDto } from './dto/vacancy.dto';
import { StageService } from './stage.service';
import { JwtAuthGuard } from 'src/auth/auth.gurad';

@Controller('/stage')
@UseGuards(JwtAuthGuard)
export class StageController {
  constructor(private readonly stageService: StageService) { }

  @Post()
  create(@Body() data: CreateVacancyDto) {
    return this.stageService.create(data);
  }

  @Get()
  async getFullVacancies() {
    // return this.stageService.getVacanciesWithRespondents()
  }

  @Get('/:id')
  getVacancy(@Param('id', ParseIntPipe) id: number) {
    return this.stageService.getOne(id);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateVacancyDto
  ) {
    await this.stageService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.stageService.delete(id);
  }


}
