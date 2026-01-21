import { Injectable } from '@nestjs/common';
import { CellContext, TYPOLOGY_MAP } from './context.types';

@Injectable()
export class ContextService {

  async getCellContext(gridCellId: number): Promise<CellContext | null> {
    // STUB: In a real app, this would fetch from a database or vector store.
    // For MVP, we return a mock based on ID parity or just random for demonstration
    // if not provided by the client (though the client DTO in the prompt implies we might receive just ID).

    // However, the PROMPT requirements say:
    // "Receive a grid cell ID and optional user question"
    // "Grid cell context may be stubbed or mocked"

    // We will return a mock context.
    return {
      id: gridCellId,
      country: "Demo Country",
      clusterNumber: (gridCellId % 5) + 1, // Deterministic mock 1-5
    };
  }

  getTypologyLabel(clusterNumber: number): string {
    return TYPOLOGY_MAP[clusterNumber] || "Unknown";
  }
}
