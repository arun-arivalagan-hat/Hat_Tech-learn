import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import TransformInterceptor from './user/utils/transform.interceptor.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
