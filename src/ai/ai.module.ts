import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { ConfigService } from '../config/config.service';
import { ContextsModule } from '../contexts/contexts.module';

@Module({
  imports: [ContextsModule],
  controllers: [AiController],
  providers: [AiService, ConfigService],
})
export class AiModule { }
