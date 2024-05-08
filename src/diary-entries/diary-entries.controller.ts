import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiaryEntriesService } from './diary-entries.service';
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';

@Controller('diary-entries')
export class DiaryEntriesController {
  constructor(private readonly diaryEntriesService: DiaryEntriesService) {}

  @Post()
  create(@Body() createDiaryEntryDto: CreateDiaryEntryDto) {
    return this.diaryEntriesService.create(createDiaryEntryDto);
  }

  @Get()
  findAll() {
    return this.diaryEntriesService.diaryEntries();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diaryEntriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiaryEntryDto: UpdateDiaryEntryDto,
  ) {
    return this.diaryEntriesService.update(+id, updateDiaryEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diaryEntriesService.remove(+id);
  }
}
