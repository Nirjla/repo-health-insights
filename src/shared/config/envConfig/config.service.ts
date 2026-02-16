import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";

@Injectable()
export class ConfigService {
      constructor(private readonly configService: NestConfigService) {
      }

      get<T>(key: string, defaultValue: T): T {
            return this.configService.get<T>(key, defaultValue);
      }
}