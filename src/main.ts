import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS provided this is accessed from a frontend
  app.enableCors();

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`GLOWdex Backend running on port ${port}`);
}
bootstrap();
