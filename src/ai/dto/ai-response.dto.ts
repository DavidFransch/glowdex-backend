import { ApiProperty } from '@nestjs/swagger';

export class AiResponseMeta {
  @ApiProperty()
  gridCellId: number;

  @ApiProperty()
  model: string;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  contextId: string;

  @ApiProperty()
  datasetVersion: string;

  @ApiProperty()
  buildDate: string;

  @ApiProperty()
  datasetHash: string;
}

export class AiResponseDto {
  @ApiProperty({
    description: 'The generated scientific summary text',
  })
  text: string;

  @ApiProperty({
    description: 'Metadata about the generation request and model',
    type: AiResponseMeta,
  })
  meta: AiResponseMeta;

  @ApiProperty({
    description: 'The raw scientific context used for generation',
    required: false,
  })
  context?: any;
}
