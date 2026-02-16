import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import configuration from "./configuration";
import { ConfigService } from "./config.service";
// https://docs.nestjs.com/techniques/configuration#schema-validation
@Module({
      imports: [
            NestConfigModule.forFeature(configuration),
      ],
      providers: [ConfigService],
      exports: [ConfigService]
})
export class ConfigModule { }