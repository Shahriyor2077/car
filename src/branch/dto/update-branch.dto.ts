import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsNumber, IsPositive, MinLength, MaxLength, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateBranchesDto } from "./create-branch.dto";

export class UpdateBranchesDto extends PartialType(CreateBranchesDto) {
  @ApiPropertyOptional({
    description: "Filial nomi",
    example: "Toshkent markaziy filiali"
  })
  @IsOptional()
  @IsString({ message: "Filial nomi matn bo'lishi kerak" })
  @MinLength(2, { message: "Filial nomi kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(100, { message: "Filial nomi 100 ta harfdan oshmasligi kerak" })
  name?: string;

  @ApiPropertyOptional({
    description: "Filial manzili",
    example: "Toshkent shahri, Chilonzor tumani, 1-uy"
  })
  @IsOptional()
  @IsString({ message: "Manzil matn bo'lishi kerak" })
  @MinLength(10, { message: "Manzil kamida 10 ta harf bo'lishi kerak" })
  @MaxLength(200, { message: "Manzil 200 ta harfdan oshmasligi kerak" })
  address?: string;

  @ApiPropertyOptional({
    description: "Kompaniya ID",
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "Kompaniya ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Kompaniya ID musbat raqam bo'lishi kerak" })
  company_id?: number;

  @ApiPropertyOptional({
    description: "Telefon raqami",
    example: "+998901234567"
  })
  @IsOptional()
  @IsString({ message: "Telefon raqami matn bo'lishi kerak" })
  phone?: string;
}