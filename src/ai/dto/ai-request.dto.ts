import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AiRequestDto {
  @ApiProperty({
    description: 'Unique Grid Cell ID from the Sievers et al. (2021) dataset',
    example: 1045,
  })
  @IsNumber()
  gridCellId: number;

  @ApiProperty({
    description: 'Optional question to refine the summary (e.g., "What are the threats?")',
    required: false,
    example: 'Explain the typology classification.',
  })
  @IsString()
  @IsOptional()
  question?: string;

  @ApiProperty({
    description: 'Context ID to query against (default: "default")',
    required: false,
    default: 'default',
  })
  @IsString()
  @IsOptional()
  contextId?: string;
}
