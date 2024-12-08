import { IsNumber, IsString, IsEmail, IsNotEmpty, IsArray, IsOptional, IsDate, IsPhoneNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  @IsOptional()
  roles: string[];

  @IsPhoneNumber(null)
  phone: string;

  @IsDate()
  @Type(() => Date)
  birthday: Date;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsNumber({}, { each: true })
  area: number | string; // Accepts both numbers and strings

  @IsEnum(['male', 'female', 'other'])
  gender: string; // Gender validation
}
