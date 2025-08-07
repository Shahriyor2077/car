import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, MaxLength } from "class-validator";

export class CreateCompaniesDto {
  @ApiProperty({
    description: "Kompaniya nomi",
    example: "Avto Ijara"
  })
  @IsString({ message: "Kompaniya nomi matn bo'lishi kerak" })
  @MinLength(2, { message: "Kompaniya nomi kamida 2 ta harf bo'lishi kerak" })
  @MaxLength(100, { message: "Kompaniya nomi 100 ta harfdan oshmasligi kerak" })
  name: string;

  @ApiProperty({
    description: "Kompaniya manzili",
    example: "Toshkent shahri, Chilonzor tumani, 2-uy"
  })
  @IsString({ message: "Manzil matn bo'lishi kerak" })
  @MinLength(10, { message: "Manzil kamida 10 ta harf bo'lishi kerak" })
  @MaxLength(200, { message: "Manzil 200 ta harfdan oshmasligi kerak" })
  address: string;

  @ApiProperty({
    description: "Telefon raqami",
    example: "+998901234567"
  })
  @IsString({ message: "Telefon raqami matn bo'lishi kerak" })
  phone: string;

  @ApiProperty({
    description: "Litsenziya raqami",
    example: "L123456789"
  })
  @IsString({ message: "Litsenziya raqami matn bo'lishi kerak" })
  @MinLength(5, { message: "Litsenziya raqami kamida 5 ta belgi bo'lishi kerak" })
  @MaxLength(20, { message: "Litsenziya raqami 20 ta belgidan oshmasligi kerak" })
  license_number: string;
}