import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadContextDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'CSV file containing the dataset (must contain "ID" column)',
  })
  file: any;

  @ApiProperty({
    description: 'Unique identifier for the context (e.g., "sievers-2021-v2")',
    example: 'my-custom-context',
  })
  @IsString()
  @IsNotEmpty()
  contextId: string;

  @ApiProperty({
    description: 'Human-readable description of the dataset',
    example: 'Updated wetland data for 2024 survey',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Schema type defining how to parse the CSV',
    example: 'sievers-2021',
  })
  @IsString()
  @IsNotEmpty()
  schemaType: string;
}
