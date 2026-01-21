export class AiResponseDto {
  text: string;
  meta: {
    gridCellId: number;
    model: string;
    reference: string;
  };
  context?: any; // Strictly typed in service, simplified here or use CellContext interface if reused
}
