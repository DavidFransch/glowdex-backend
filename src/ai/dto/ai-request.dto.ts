import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AiRequestDto {
  @IsNumber()
  gridCellId: number;

  @IsString()
  @IsOptional()
  question?: string;
}
