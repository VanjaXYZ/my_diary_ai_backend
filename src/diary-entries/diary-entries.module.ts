import { Module } from '@nestjs/common';
import { DiaryEntriesService } from './diary-entries.service';
import { DiaryEntriesController } from './diary-entries.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DiaryEntriesController],
  providers: [DiaryEntriesService, PrismaService],
})
export class DiaryEntriesModule {}
