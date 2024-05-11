import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { RegistrationService } from './registration.service';

@Controller('register')
export class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService,
    private prisma: PrismaService,
  ) {}

  @Post()
  async registerUser(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    try {
      const user = await this.registrationService.registerUser(userData);
      return user;
    } catch (error) {
      throw new Error('Failed to register user.');
    }
  }

  @Get()
  findAll() {
    return this.registrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegistrationDto: UpdateRegistrationDto,
  ) {
    return this.registrationService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationService.remove(+id);
  }
}
