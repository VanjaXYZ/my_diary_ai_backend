import { IsString } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
