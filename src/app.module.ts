import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';

import { AiModule } from './ai/ai.module';
import { ContextsModule } from './contexts/contexts.module';

@Module({
  imports: [AiModule, ContextsModule],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule { }
