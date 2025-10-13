import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: EntityRepository<User>,
  ) { }

  public findOne(login: string): Promise<User | undefined> {
    return this.userRepo.findOne({ login });
  }

  public async register(login: string, _password: string, name: string) {
    const password = await bcrypt.hash(_password, 10);
    await this.userRepo.insert({ login, password, name });
  }

  public remove(id: number) {
    return this.userRepo.nativeDelete({ id })
  }

  public list() {
    return this.userRepo.createQueryBuilder('u')
      .select(['login','name',])
      .getResult()
  }
}
