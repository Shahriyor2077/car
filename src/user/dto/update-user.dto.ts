import { PartialType } from "@nestjs/mapped-types";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, IsEmail, IsBoolean, MinLength, MaxLength } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: "Foydalanuvchining to'liq ismi",
    example: "Aziz Azizov"
  })
  @IsOptional()
  @IsString({ message: "Ism matn bo'lishi kerak" })
  @MinLength(2, { message: "Ism kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Ism 50 ta harfdan oshmasligi kerak" })
  full_name?: string;

  @ApiPropertyOptional({
    description: "Telefon raqami",
    example: "+998901234567"
  })
  @IsOptional()
  @IsString({ message: "Telefon raqami matn bo'lishi kerak" })
  phone?: string;

  @ApiPropertyOptional({
    description: "Email manzili",
    example: "aziz@example.com"
  })
  @IsOptional()
  @IsEmail({}, { message: "To'g'ri email kiriting" })
  email?: string;

  @ApiPropertyOptional({
    description: "Parol",
    example: "123456"
  })
  @IsOptional()
  @IsString({ message: "Parol matn bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgi bo'lishi kerak" })
  password?: string;

  @ApiPropertyOptional({
    description: "Tug'ilgan kun ",
    example: "1990-01-01"
  })
  @IsOptional()
  @IsString({ message: "Tug'ilgan kun matn bo'lishi kerak" })
  birthday?: string;

  @ApiPropertyOptional({
    description: "Foydalanuvchi faolmi"
  })
  @IsOptional()
  @IsBoolean({ message: "Faollik bo'lishi kerak" })
  is_active?: boolean;
}