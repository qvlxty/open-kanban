import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateVacancyDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsOptional()
    stack?: string;

    @IsBoolean()
    @IsOptional()
    isOpen?: boolean
}