import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsOptional, MinLength, MaxLength, IsIn } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    description: "Adminning to'liq ismi",
    example: "Admin Adminov"
  })
  @IsString({ message: "Ism matn bo'lishi kerak" })
  @MinLength(2, { message: "Ism kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Ism 50 ta harfdan oshmasligi kerak" })
  full_name: string;

  @ApiProperty({
    description: "Email manzili",
    example: "admin@example.com"
  })
  @IsEmail({}, { message: "To'g'ri email kiriting" })
  email: string;

  @ApiProperty({
    description: "Parol (kamida 6 ta belgi)",
    example: "123456"
  })
  @IsString({ message: "Parol matn bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgi bo'lishi kerak" })
  password: string;

  @ApiProperty({
    description: "Admin roli (ixtiyoriy)",
    example: "ADMIN",
    enum: ["ADMIN", "MANAGER"],
    required: false
  })
  @IsOptional()
  @IsIn(["ADMIN", "MANAGER"], { message: "Rol ADMIN yoki MANAGER bo'lishi kerak" })
  role?: "ADMIN" | "MANAGER";
}