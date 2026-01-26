import { Module } from '@nestjs/common';
import { ContextRegistryService } from './context-registry.service';
import { ContextsController } from './contexts.controller';
import { SieversProvider } from './providers/sievers.provider';

@Module({
  controllers: [ContextsController],
  providers: [ContextRegistryService, SieversProvider],
  exports: [ContextRegistryService],
})
export class ContextsModule { }
