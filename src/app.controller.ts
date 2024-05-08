import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { DiaryEntriesService } from './diary-entries/diary-entries.service';
import {
  User as UserModel,
  DiaryEntries as DiaryEntriesModel,
} from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly diaryEntriesService: DiaryEntriesService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('diary-entries/:id')
  async getPostById(@Param('id') id: string): Promise<DiaryEntriesModel> {
    return this.diaryEntriesService.diaryEntry({ id: Number(id) });
  }

  @Post('diary-entries')
  async createDiaryEntry(
    @Body()
    diaryEntryData: {
      title: string;
      content?: string;
      authorEmail: string;
    },
  ): Promise<DiaryEntriesModel> {
    const { title, content, authorEmail } = diaryEntryData;
    return this.diaryEntriesService.createDiaryEntries({
      title,
      content,
      author: { connect: { email: authorEmail } },
    });
  }

  @Post('user')
  async signupUser(
    @Body()
    userData: {
      username: string;
      email: string;
      password: string;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete('diary-entries/:id')
  async deleteDiaryEntry(@Param('id') id: string): Promise<DiaryEntriesModel> {
    return this.diaryEntriesService.deleteDiaryEntries({ id: Number(id) });
  }
}
