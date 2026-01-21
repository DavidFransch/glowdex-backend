import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { ContextService } from '../context/context.service';
import { AiRequestDto } from './dto/ai-request.dto';
import { AiResponseDto } from './dto/ai-response.dto';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION, buildPrompt } from './ai.prompt';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private genAI: GoogleGenAI;
  private modelName = 'gemini-2.5-flash';

  constructor(
    private configService: ConfigService,
    private contextService: ContextService,
  ) {
    const apiKey = this.configService.getGeminiApiKey();
    if (apiKey) {
      this.genAI = new GoogleGenAI({ apiKey });
    }
  }

  async generateSummary(dto: AiRequestDto): Promise<AiResponseDto> {
    if (!this.genAI) {
      return {
        text: 'AI Service unavailable: Missing API Key',
        meta: {
          gridCellId: dto.gridCellId,
          model: 'none',
          reference: 'error',
        },
      };
    }

    // 1. Get Context
    const context = await this.contextService.getCellContext(dto.gridCellId);

    if (!context) {
      return {
        text: 'Grid cell not found in scientific database.',
        meta: {
          gridCellId: dto.gridCellId,
          model: this.modelName,
          reference: 'none',
        },
      };
    }

    const typologyLabel = context.typologyLabel5;

    // 2. Build Prompt
    const prompt = buildPrompt(context, typologyLabel, dto.question);

    try {
      // 3. Call Gemini
      this.logger.log(`Using model: ${this.modelName}`);
      this.logger.debug(`Prompt payload: ${prompt.substring(0, 100)}...`);

      const response: any = await this.genAI.models.generateContent({
        model: this.modelName,
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
        },
      });

      this.logger.log('Gemini response received');

      // Based on user provided frontend example using @google/genai SDK
      // Accessing .text property directly.
      const responseText = typeof response.text === 'function' ? response.text() : response.text;

      // Return the response with the authoritative context attached
      return {
        text: responseText || "No response generated.",
        meta: {
          gridCellId: dto.gridCellId,
          model: this.modelName,
          reference: 'sievers-2021-only',
        },
        context: {
          ...context,
          datasetVersion: this.contextService.getDatasetVersion(),
        },
      };
    } catch (error) {
      this.logger.error('Gemini API Error', error);
      return {
        text: 'An error occurred while communicating with the AI service.',
        meta: {
          gridCellId: dto.gridCellId,
          model: this.modelName,
          reference: 'error',
        },
      };
    }
  }
}
