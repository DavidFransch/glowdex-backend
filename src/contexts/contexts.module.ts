import { Module } from '@nestjs/common';
import { ContextRegistryService } from './context-registry.service';
import { ContextsController } from './contexts.controller';

@Module({
  controllers: [ContextsController],
  providers: [ContextRegistryService],
  exports: [ContextRegistryService],
})
export class ContextsModule { }
