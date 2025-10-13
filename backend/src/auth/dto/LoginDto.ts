import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({
    type: 'string',
    example: 'admin',
  })
  login: string;
  @ApiProperty({
    type: 'string',
    example: 'qwerty',
  })
  password: string;
}
