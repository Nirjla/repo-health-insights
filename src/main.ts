import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('server.port', 5000);
  const dbHost = configService.get<string>('server.database.host', 'localhost');
  const dbPort = configService.get<number>('server.database.port', 5432);
  const env = configService.get<string>('server.env', 'development');
  const apiPrefix = configService.get<string>('server.apiPrefix', 'api');
  app.enableCors();
  app.setGlobalPrefix(apiPrefix);

  if (env === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Repo Health Insights')
      .setDescription('Repo Health Insights API')
      .setVersion('1.0')
      .addTag('repo-health-insights')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api-docs', app, document);
  }



  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);
  logger.log(`Database is running on: ${dbHost}:${dbPort}`);
  logger.log(`Environment is running on: ${env}`);
}
bootstrap();
