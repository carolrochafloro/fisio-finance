import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import run from './db/connection';

run();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Listening on port 3000');
}
bootstrap();
