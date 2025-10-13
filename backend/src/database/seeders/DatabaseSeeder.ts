import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import bcrypt from 'bcrypt'
import { User } from '../../modules/user/user.entity';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
     await em.insert(User, {
      login: 'test',
      password: bcrypt.hashSync('test',10),
      name: 'admin'
    });
  }

}
