export class AiResponseDto {
  text: string;
  meta: {
    gridCellId: number;
    model: string;
    reference: string;
  };
}
