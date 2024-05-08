import { Injectable } from '@nestjs/common';
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';
import { PrismaService } from 'src/prisma.service';
import { DiaryEntries, Prisma } from '@prisma/client';

@Injectable()
export class DiaryEntriesService {
  constructor(private prisma: PrismaService) {}

  async diaryEntry(
    postWhereUniqueInput: Prisma.DiaryEntriesWhereUniqueInput,
  ): Promise<DiaryEntries | null> {
    return this.prisma.diaryEntries.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async diaryEntries(): Promise<DiaryEntries[]> {
    return this.prisma.diaryEntries.findMany();
  }

  async createDiaryEntries(
    data: Prisma.DiaryEntriesCreateInput,
  ): Promise<DiaryEntries> {
    return this.prisma.diaryEntries.create({
      data,
    });
  }

  async updateDiaryEntries(params: {
    where: Prisma.DiaryEntriesWhereUniqueInput;
    data: Prisma.DiaryEntriesUpdateInput;
  }): Promise<DiaryEntries> {
    const { data, where } = params;
    return this.prisma.diaryEntries.update({
      data,
      where,
    });
  }

  async deleteDiaryEntries(
    where: Prisma.DiaryEntriesWhereUniqueInput,
  ): Promise<DiaryEntries> {
    return this.prisma.diaryEntries.delete({
      where,
    });
  }
  create(createDiaryEntryDto: CreateDiaryEntryDto) {
    return 'This action adds a new diaryEntry';
  }

  // findAll(): DiaryEntries[] {
  //   return this.diaryEntry;
  // }

  findOne(id: number) {
    return `This action returns a #${id} diaryEntry`;
  }

  update(id: number, updateDiaryEntryDto: UpdateDiaryEntryDto) {
    return `This action updates a #${id} diaryEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} diaryEntry`;
  }
}
