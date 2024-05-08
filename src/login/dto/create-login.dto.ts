import { IsString } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
