import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService, PrismaService],
})
export class RegistrationModule {}
