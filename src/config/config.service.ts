import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    dotenv.config();
    this.envConfig = process.env;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getGeminiApiKey(): string {
    const key = this.envConfig['GOOGLE_AI_API_KEY'];
    if (!key) {
      console.warn('WARNING: GOOGLE_AI_API_KEY is not set in environment.');
    }
    return key;
  }
}
