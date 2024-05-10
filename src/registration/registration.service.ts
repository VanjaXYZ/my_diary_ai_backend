import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}
  // async registerUser(createRegistrationDto: CreateRegistrationDto) {
  //   return 'This action adds a new registration';
  // }

  async registerUser(data: Prisma.UserCreateInput): Promise<any> {
    try {
      const user = await this.prisma.user.create({ data });
      return user;
    } catch (error) {
      throw new Error('Failed to register user.');
    }
  }

  findAll() {
    return `This action returns all registration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
