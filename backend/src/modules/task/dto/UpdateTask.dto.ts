import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
    id?: number;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    stageId: number

    @IsDateString()
    @IsOptional()
    dueDate: Date

    @IsArray()
    @IsOptional()
    participants: number[]
}
