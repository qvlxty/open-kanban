import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {compare} from 'bcrypt'
import { User } from '../modules/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: EntityRepository<User>,
        private jwtService: JwtService,
    ) { }

    async signIn({login, password}: {login: string, password: string}) {
        const user = await this.userRepo.findOneOrFail({ login });
        if (await compare(password, user.password)) {
            const payload = { login: user.login, id: user.id };
            return { access_token: `Bearer ${this.jwtService.sign(payload)}` };
        }
        throw new UnauthorizedException();
    }

    async validateUser({login, id}: {login:string, id: number}) {
        return this.userRepo.findOneOrFail({ login, id }, {fields: ['id','login']});
    }
}
