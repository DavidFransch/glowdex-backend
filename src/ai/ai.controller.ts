import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AiService } from './ai.service';
import { AiRequestDto } from './dto/ai-request.dto';
import { AiResponseDto } from './dto/ai-response.dto';

@ApiTags('AI')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) { }

  @Post('summary')
  @ApiOperation({
    summary: 'Generate a scientific summary for a grid cell',
    description:
      'Generates a deterministic summary based on the Sievers et al. (2021) typology. ' +
      'This endpoint does not produce predictive or policy advice.',
  })
  @ApiResponse({
    status: 200,
    description: 'The scientific summary and associated metadata.',
    type: AiResponseDto,
  })
  async getSummary(@Body() dto: AiRequestDto): Promise<AiResponseDto> {
    return this.aiService.generateSummary(dto);
  }
}
