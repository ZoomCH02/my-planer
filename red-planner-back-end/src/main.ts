import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 4200); // Значение по умолчанию 4200

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
