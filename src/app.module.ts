import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { DiaryEntriesModule } from './diary-entries/diary-entries.module';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { DiaryEntriesService } from './diary-entries/diary-entries.service';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [LoginModule, UserModule, DiaryEntriesModule, RegistrationModule],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, DiaryEntriesService],
})
export class AppModule {}
