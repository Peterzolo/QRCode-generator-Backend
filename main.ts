import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const Port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(Port, () => {
    console.log(`Server is now running on port ${Port}`);
  });
}

bootstrap();

// import { NestFactory } from '@nestjs/core';

// import * as dotenv from 'dotenv';
// import * as path from 'path';
// import { AppModule } from 'src/app.module';

// async function bootstrap() {
//   const result = dotenv.config({ path: path.resolve(__dirname, '../.env') });

//   if (result.error) {
//     console.error('Error loading .env file:', result.error);
//   } else {
//     console.log('Loaded environment variables from .env file');
//   }

//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }

// bootstrap();
