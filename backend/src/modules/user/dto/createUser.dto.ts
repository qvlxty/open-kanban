import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(88)
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(88)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(88)
  name: string;
}
