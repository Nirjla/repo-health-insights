import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './shared/config/envConfig/configuration';
import { ConfigModule } from './shared/config/envConfig/config.module';
import { envSchema } from './shared/common/validations/env.validation';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [UsersModule,
    NestConfigModule.forRoot({
      cache: true,
      isGlobal: true, // [Note: isGlobal: true makes the ConfigModule globally available, you dont have to import it in every module]
      load: [configuration],
      validationSchema: envSchema,
    }),
    ConfigModule
  ], // [Note: nestjs/config is a package managed by nestjs for loading configuration from .env files]
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
