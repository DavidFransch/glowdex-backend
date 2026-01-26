import { Injectable, Logger } from '@nestjs/common';
import { CellContext, DatasetVersion } from '../context/context.types';

export interface RegisteredContext {
  contextId: string;
  description: string;
  schemaType: string;
  data: Map<number, CellContext>;
  version: DatasetVersion;
}

@Injectable()
export class ContextRegistryService {
  private readonly logger = new Logger(ContextRegistryService.name);
  private contexts = new Map<string, RegisteredContext>();

  register(context: RegisteredContext) {
    this.contexts.set(context.contextId, context);
    this.logger.log(`Registered context: ${context.contextId} (${context.data.size} items)`);
  }

  get(contextId: string): RegisteredContext | undefined {
    return this.contexts.get(contextId);
  }

  getCellContext(contextId: string, cellId: number): CellContext | null {
    const context = this.get(contextId);
    if (!context) return null;
    return context.data.get(cellId) || null;
  }

  has(contextId: string): boolean {
    return this.contexts.has(contextId);
  }
}
