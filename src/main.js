import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const options = new DocumentBuilder() //Create new OpenAPI definition
    .setTitle('NestJS App')
    .setDescription('Basic Nest App')
    .setVersion('0.1.0')
    .addTag('nestapp')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
