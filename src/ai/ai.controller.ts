import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiRequestDto } from './dto/ai-request.dto';
import { AiResponseDto } from './dto/ai-response.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) { }

  @Post('summary')
  async getSummary(@Body() dto: AiRequestDto): Promise<AiResponseDto> {
    return this.aiService.generateSummary(dto);
  }
}
