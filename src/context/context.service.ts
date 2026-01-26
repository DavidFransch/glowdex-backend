import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { CellContext, TYPOLOGY_5_LABELS, DatasetVersion } from './context.types';
import { ContextRegistryService } from '../contexts/context-registry.service';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

@Injectable()
export class ContextService implements OnModuleInit {
  private readonly logger = new Logger(ContextService.name);
  private contextMap = new Map<number, CellContext>();
  private datasetVersion: DatasetVersion;

  constructor(private readonly contextRegistry: ContextRegistryService) { }

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
      // Compute deterministic hash of raw files
      const clustersRaw = fs.readFileSync(clustersPath, 'utf-8');
      const gridItemsRaw = fs.readFileSync(gridItemsPath, 'utf-8');

      const hash = crypto.createHash('sha256');
      hash.update(clustersRaw);
      hash.update(gridItemsRaw);
      const datasetHash = hash.digest('hex');
      const buildDate = new Date().toISOString();

      this.datasetVersion = { buildDate, datasetHash };
      this.logger.log(`Dataset Version: ${datasetHash} (Built: ${buildDate})`);

      // 1. Load Clusters (Typologies & Habitat)
      // ID,mang_presence,salt_presence,seag_presence,cluster_5,hex_5,cluster_18,hex_18
      const clustersData = parse(clustersRaw, {
        columns: true,
        skip_empty_lines: true,
        cast: true, // Auto-convert numbers
      });

      // 2. Load Grid Items (Metadata)
      // "ID","TERRITORY1","ISO_TER1", ...
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
          datasetVersion: this.datasetVersion,
        };

        this.contextMap.set(id, context);
        count++;
      }

      this.logger.log(`Loaded ${count} grid cells into scientific context.`);

      // Register as default scientific context
      this.contextRegistry.register({
        contextId: 'default',
        description: 'Global Coastal Wetlands Index (Sievers et al., 2021)',
        schemaType: 'sievers-2021',
        data: this.contextMap,
        version: this.datasetVersion,
      });

      this.contextRegistry.register({
        contextId: 'sievers-2021',
        description: 'Global Coastal Wetlands Index (Sievers et al., 2021)',
        schemaType: 'sievers-2021',
        data: this.contextMap,
        version: this.datasetVersion,
      });

    } catch (error) {
      this.logger.error('Failed to parse CSV data', error);
      throw error;
    }
  }

  async getCellContext(gridCellId: number): Promise<CellContext | null> {
    return this.contextMap.get(Number(gridCellId)) || null;
  }

  getDatasetVersion(): DatasetVersion {
    return this.datasetVersion;
  }
}
