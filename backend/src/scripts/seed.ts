import { NestFactory } from '@nestjs/core';
import { UserModule } from '../modules/user/user.module';
import { UserService } from '../modules/user/user.service';
import { AppModule } from '../app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app
        .select(UserModule)
        .get(UserService)
        .register(
            'admin',
            'admin',
            'fio test'
        )

}
bootstrap();
