import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS provided this is accessed from a frontend
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('GLOWdex Scientific AI API')
    .setDescription(
      'Scientific boundary service for the Global Coastal Wetlands Index (Sievers et al., 2021). ' +
      'Provides deterministic summaries and context management. ' +
      'Note: This system does not perform predictions or offer policy advice.',
    )
    .setVersion('1.0')
    .addTag('AI', 'Generative scientific summaries')
    .addTag('Contexts', 'Scientific context management')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`GLOWdex Backend running on port ${port}`);
}
bootstrap();
