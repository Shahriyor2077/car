import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsBoolean, IsPositive, MinLength, MaxLength } from "class-validator";

export class CreateCarDto {
  @ApiProperty({
    description: "Filial ID",
    example: 1
  })
  @IsNumber({}, { message: "Filial ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Filial ID musbat raqam bo'lishi kerak" })
  branch_id: number;

  @ApiProperty({
    description: "Avtomobil brendi",
    example: "Toyota"
  })
  @IsString({ message: "Brend matn bo'lishi kerak" })
  @MinLength(2, { message: "Brend kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Brend 50 ta harfdan oshmasligi kerak" })
  brand: string;

  @ApiProperty({
    description: "Avtomobil modeli",
    example: "Camry"
  })
  @IsString({ message: "Model matn bo'lishi kerak" })
  @MinLength(2, { message: "Model kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(50, { message: "Model 50 ta harfdan oshmasligi kerak" })
  model: string;

  @ApiProperty({
    description: "Ishlab chiqarilgan yili",
    example: "2020"
  })
  @IsString({ message: "Yil matn bo'lishi kerak" })
  year: string;

  @ApiProperty({
    description: "Rang",
    example: "red"
  })
  @IsString({ message: "Rang matn bo'lishi kerak" })
  color: string;

  @ApiProperty({
    description: "Yurgan masofa (km)",
    example: 50000
  })
  @IsNumber({}, { message: "Masofa raqam bo'lishi kerak" })
  @IsPositive({ message: "Masofa musbat raqam bo'lishi kerak" })
  mileage: number;

  @ApiProperty({
    description: "Kunlik narxi",
    example: "500000"
  })
  @IsString({ message: "Narx matn bo'lishi kerak" })
  price_per_day: string;

  @ApiProperty({
    description: "Avtomobil mavjudmi",
    example: true
  })
  @IsBoolean({ message: "Mavjudlik mantiqiy qiymat bo'lishi kerak" })
  is_available: boolean;
}