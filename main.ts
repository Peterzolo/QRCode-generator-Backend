import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const Port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(Port, () => {
    console.log(`Server is now running on port ${Port}`);
  });
}

bootstrap();
