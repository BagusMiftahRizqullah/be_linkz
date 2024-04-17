import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';

export class signupInterface {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  no_telephone: number;

  @IsNotEmpty()
  age: number;
}

export class signinInterface {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
