import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../../auth/decorators/user.decorator';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/auth/auth.gurad';

@Controller('/user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Delete('/:id')
  public delete(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
    if (user.id == id) {
      return 'Нельзя удалить себя'
    }
    return this.userService.remove(id);
  }

  @Post()
  public async register(@Body() { login, password, name }: CreateUserDto) {
    await this.userService.register(login, password, name);
  }

  @Get()
  public userlist() {
    return this.userService.list();
  }

}
