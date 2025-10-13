import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NotFoundFilter } from './filters/not-found.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new NotFoundFilter())
  app.setGlobalPrefix('/api');

  const port = app.select(ConfigModule)
    .get(ConfigService)
    .get<number>('APP_PORT')

  await app.listen(port || 3000);
}
bootstrap();
