import { User } from '@prisma/client';
import { IsInt, IsString } from 'class-validator';

export class CreateDiaryEntryDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  author: User;

  @IsInt()
  authorId?: number;
}
