import { Controller, Post, UseInterceptors, UploadedFile, Body, BadRequestException, Logger } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ContextRegistryService } from './context-registry.service';
import { UploadContextDto } from './dto/upload-context.dto';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { parse } from 'csv-parse/sync';
import { CellContext, TYPOLOGY_5_LABELS, TYPOLOGY_18_LABELS } from '../context/context.types';

@Controller('contexts')
export class ContextsController {
  private readonly logger = new Logger(ContextsController.name);

  constructor(private readonly contextRegistry: ContextRegistryService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadContext(
    @UploadedFile() file: any,
    @Body() dto: UploadContextDto,
  ) {
    if (!file) {
      throw new BadRequestException('CSV file is required');
    }

    this.logger.log(`Receiving context upload: ${dto.contextId} (${dto.description})`);

    // 1. Basic Validation
    const rawContent = file.buffer.toString('utf-8');
    let records: any[];

    try {
      records = parse(rawContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        cast: true,
      });
    } catch (e) {
      throw new BadRequestException('Invalid CSV format');
    }

    if (records.length === 0) {
      throw new BadRequestException('CSV file is empty');
    }

    // Check for ID column
    if (!records[0].hasOwnProperty('ID')) {
      throw new BadRequestException('CSV must contain an "ID" column');
    }

    // Check if ID is numeric
    if (isNaN(Number(records[0].ID))) {
      throw new BadRequestException('ID column must be numeric');
    }

    // 2. Compute Hash & Version
    const hash = crypto.createHash('sha256').update(rawContent).digest('hex');
    const buildDate = new Date().toISOString();

    // 3. Persist File
    const uploadDir = path.join(process.cwd(), 'data', 'uploads', dto.contextId);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    fs.writeFileSync(path.join(uploadDir, 'source.csv'), rawContent);

    // 4. Transform to CellContext (Best Effort Mapping)
    // NOTE: This assumes the uploaded CSV matches the Sievers schema roughly
    // Or allows partial fields. The Prompt says "schemaType: grid-cell".
    // We will map strictly available fields and set defaults for others.

    const contextMap = new Map<number, CellContext>();

    for (const row of records) {
      const id = Number(row.ID);
      // Mapping logic - defaulting to safe values if columns describe generic data
      const cluster5 = Number(row.cluster_5 || 0);
      const cluster18 = Number(row.cluster_18 || 0);

      const ctx: CellContext = {
        id,
        country: row.TERRITORY1 || row.country || null,
        isoCode: row.ISO_TER1 || row.isoCode || null,
        cluster5: cluster5,
        cluster18: cluster18,
        typologyLabel5: TYPOLOGY_5_LABELS[cluster5] || `Typology ${cluster5}`,
        typologyLabel18: TYPOLOGY_18_LABELS[cluster18] || `Sub-Typology ${cluster18}`,
        habitats: {
          mangrove: Boolean(row.mang_presence || row.mangrove),
          saltmarsh: Boolean(row.salt_presence || row.saltmarsh),
          seagrass: Boolean(row.seag_presence || row.seagrass),
        },
        datasetVersion: { buildDate, datasetHash: hash }
      };
      contextMap.set(id, ctx);
    }

    // 5. Register
    this.contextRegistry.register({
      contextId: dto.contextId,
      description: dto.description,
      schemaType: dto.schemaType,
      data: contextMap,
      version: { buildDate, datasetHash: hash }
    });

    return {
      status: 'success',
      contextId: dto.contextId,
      itemsLoaded: contextMap.size,
      datasetHash: hash
    };
  }
}
