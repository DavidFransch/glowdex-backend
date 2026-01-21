import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { ConfigService } from '../config/config.service';
import { ContextService } from '../context/context.service';

@Module({
  controllers: [AiController],
  providers: [AiService, ConfigService, ContextService],
})
export class AiModule { }
