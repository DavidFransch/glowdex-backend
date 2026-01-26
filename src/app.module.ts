import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { ContextService } from './context/context.service';
import { AiModule } from './ai/ai.module';
import { ContextsModule } from './contexts/contexts.module';

@Module({
  imports: [AiModule, ContextsModule],
  controllers: [],
  providers: [ConfigService, ContextService],
  exports: [ConfigService, ContextService],
})
export class AppModule { }
