import { IsString, IsEmail } from 'class-validator';

export class CreateGuestDto {

  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;
}