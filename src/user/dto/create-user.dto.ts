import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  MinLength,
  MaxLength,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "Foydalanuvchining to'liq ismi",
    example: "Aziz Azizov",
  })
  @IsString({ message: "Ism matn bo'lishi kerak" })
  @MinLength(2, { message: "Ism kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Ism 50 ta harfdan oshmasligi kerak" })
  full_name: string;

  @ApiProperty({
    description: "Telefon raqami",
    example: "+998901234567",
  })
  @IsString({ message: "Telefon raqami matn bo'lishi kerak" })
  phone: string;

  @ApiProperty({
    description: "Email manzili",
    example: "aziz@mail.com",
  })
  @IsEmail({}, { message: "To'g'ri email kiriting" })
  email: string;

  @ApiProperty({
    description: "Parol kamida 6 ta beli",
    example: "123456",
  })
  @IsString({ message: "Parol matn bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgi bo'lishi kerak" })
  password: string;

  @ApiProperty({
    description: "Tug'ilgan kun yyy-mm-dd",
    example: "1990-01-01",
  })
  @IsString({ message: "Tug'ilgan kun matn bo'lishi kerak" })
  birthday: string;

  @ApiProperty({
    description: "Foydalanuvchi faolmi ",
    required: false,
  })
  @IsOptional()
  @IsBoolean({ message: "Faollik bo'lishi kerak" })
  is_active?: boolean;
}
