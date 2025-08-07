
import { IsString, IsEmail, IsOptional, MinLength, MaxLength, IsIn } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { CreateAdminDto } from "./create-admin.dto";

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @ApiPropertyOptional({
    description: "Adminning to'liq ismi (ixtiyoriy)",
    example: "Admin Adminov"
  })
  @IsOptional()
  @IsString({ message: "Ism matn bo'lishi kerak" })
  @MinLength(2, { message: "Ism kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Ism 50 ta harfdan oshmasligi kerak" })
  full_name?: string;

  @ApiPropertyOptional({
    description: "Email manzili (ixtiyoriy)",
    example: "admin@example.com"
  })
  @IsOptional()
  @IsEmail({}, { message: "To'g'ri email kiriting" })
  email?: string;

  @ApiPropertyOptional({
    description: "Parol (ixtiyoriy)",
    example: "123456"
  })
  @IsOptional()
  @IsString({ message: "Parol matn bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgi bo'lishi kerak" })
  password?: string;

  @ApiPropertyOptional({
    description: "Admin roli (ixtiyoriy)",
    example: "ADMIN",
    enum: ["ADMIN", "MANAGER"]
  })
  @IsOptional()
  @IsIn(["ADMIN", "MANAGER"], { message: "Rol ADMIN yoki MANAGER bo'lishi kerak" })
  role?: "ADMIN" | "MANAGER";
}