import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { ContextService } from './context/context.service';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [AiModule],
  controllers: [],
  providers: [ConfigService, ContextService],
  exports: [ConfigService, ContextService],
})
export class AppModule { }
