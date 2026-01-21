import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { CellContext, TYPOLOGY_5_LABELS } from './context.types';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

@Injectable()
export class ContextService implements OnModuleInit {
  private readonly logger = new Logger(ContextService.name);
  private contextMap = new Map<number, CellContext>();

  async onModuleInit() {
    await this.loadData();
  }

  private async loadData() {
    this.logger.log('Loading scientific context from CSVs...');

    const dataDir = path.join(process.cwd(), 'data');
    const clustersPath = path.join(dataDir, 'all-clusters.csv');
    const gridItemsPath = path.join(dataDir, 'grid-items.csv');

    if (!fs.existsSync(clustersPath) || !fs.existsSync(gridItemsPath)) {
      this.logger.error(`Data files not found in ${dataDir}`);
      return;
    }

    try {
      // 1. Load Clusters (Typologies & Habitat)
      // ID,mang_presence,salt_presence,seag_presence,cluster_5,hex_5,cluster_18,hex_18
      const clustersRaw = fs.readFileSync(clustersPath, 'utf-8');
      const clustersData = parse(clustersRaw, {
        columns: true,
        skip_empty_lines: true,
        cast: true, // Auto-convert numbers
      });

      // 2. Load Grid Items (Metadata)
      // "ID","TERRITORY1","ISO_TER1", ...
      const gridItemsRaw = fs.readFileSync(gridItemsPath, 'utf-8');
      const gridItemsData = parse(gridItemsRaw, {
        columns: true,
        skip_empty_lines: true,
        cast: true,
      });

      // 3. Index Grid Items by ID
      const itemsMap = new Map<number, any>();
      for (const item of gridItemsData as any[]) {
        // ID might be parsed as string if quoted, ensure number
        const id = Number(item.ID);
        itemsMap.set(id, item);
      }

      // 4. Join and Build Context
      let count = 0;
      for (const clusterRow of clustersData as any[]) {
        const id = Number(clusterRow.ID);
        const itemRow = itemsMap.get(id);

        // Safe accessors with no inference
        const cluster5 = Number(clusterRow.cluster_5);
        const cluster18 = Number(clusterRow.cluster_18);

        const context: CellContext = {
          id: id,
          country: itemRow?.TERRITORY1 || null,
          isoCode: itemRow?.ISO_TER1 || null,
          cluster5: cluster5,
          cluster18: cluster18,
          typologyLabel5: TYPOLOGY_5_LABELS[cluster5] || `Typology ${cluster5}`,
          typologyLabel18: `Sub-Typology ${cluster18}`,
          habitats: {
            mangrove: Boolean(clusterRow.mang_presence),
            saltmarsh: Boolean(clusterRow.salt_presence),
            seagrass: Boolean(clusterRow.seag_presence),
          },
        };

        this.contextMap.set(id, context);
        count++;
      }

      this.logger.log(`Loaded ${count} grid cells into scientific context.`);

    } catch (error) {
      this.logger.error('Failed to parse CSV data', error);
      throw error;
    }
  }

  async getCellContext(gridCellId: number): Promise<CellContext | null> {
    return this.contextMap.get(Number(gridCellId)) || null;
  }
}
