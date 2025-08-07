import { PartialType } from "@nestjs/mapped-types";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsNumber, IsString, IsBoolean, IsPositive, MinLength, MaxLength } from "class-validator";
import { CreateCarDto } from "./create-car.dto";

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @ApiPropertyOptional({
    description: "Filial ID ",
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "Filial ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Filial ID musbat raqam bo'lishi kerak" })
  branch_id?: number;

  @ApiPropertyOptional({
    description: "Avtomobil brendi",
    example: "Toyota"
  })
  @IsOptional()
  @IsString({ message: "Brend matn bo'lishi kerak" })
  @MinLength(2, { message: "Brend kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Brend 50 ta harfdan oshmasligi kerak" })
  brand?: string;

  @ApiPropertyOptional({
    description: "Avtomobil modeli",
    example: "Camry"
  })
  @IsOptional()
  @IsString({ message: "Model matn bo'lishi kerak" })
  @MinLength(2, { message: "Model kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Model 50 ta harfdan oshmasligi kerak" })
  model?: string;

  @ApiPropertyOptional({
    description: "Ishlab chiqarilgan yili",
    example: "2020"
  })
  @IsOptional()
  @IsString({ message: "Yil matn bo'lishi kerak" })
  year?: string;

  @ApiPropertyOptional({
    description: "Rang ",
    example: "red"
  })
  @IsOptional()
  @IsString({ message: "Rang matn bo'lishi kerak" })
  color?: string;

  @ApiPropertyOptional({
    description: "Yurgan masofa ",
    example: 50000
  })
  @IsOptional()
  @IsNumber({}, { message: "Masofa raqam bo'lishi kerak" })
  @IsPositive({ message: "Masofa musbat raqam bo'lishi kerak" })
  mileage?: number;

  @ApiPropertyOptional({
    description: "Kunlik narxi ",
    example: "500000"
  })
  @IsOptional()
  @IsString({ message: "Narx matn bo'lishi kerak" })
  price_per_day?: string;

  @ApiPropertyOptional({
    description: "Avtomobil mavjudmi ",
    example: true
  })
  @IsOptional()
  @IsBoolean({ message: "Mavjudlik mantiqiy qiymat bo'lishi kerak" })
  is_available?: boolean;
}