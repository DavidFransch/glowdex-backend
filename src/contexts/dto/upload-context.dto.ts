import { IsString, IsNotEmpty } from 'class-validator';

export class UploadContextDto {
  @IsString()
  @IsNotEmpty()
  contextId: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  schemaType: string;
}
