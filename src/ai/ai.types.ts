export interface AiLogEntry {
  timestamp: string;
  model: string;
  gridCellId: number;
  question: string;
  response: string;
}
