import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateStageDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

}