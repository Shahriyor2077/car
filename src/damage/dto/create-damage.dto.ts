import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength, IsDateString } from "class-validator";

export class CreateDamagesDto {
  @ApiProperty({
    description: "Ijaraga olingan avtomobil ID",
    example: 1,
  })
  @IsNumber({}, { message: "rental_id raqam bo'lishi kerak" })
  rental_id: number;

  @ApiProperty({
    description: "Zarar tavsifi",
    example: "Old bamperda tirnalgan joy bor.",
  })
  @IsString({ message: "Tavsif matn bo'lishi kerak" })
  @MinLength(5, { message: "Tavsif kamida 5 ta harf bo'lishi kerak" })
  description: string;

  @ApiProperty({
    description: "Zarar qiymati",
    example: "500000",
  })
  @IsString({ message: "Qiymat matn bo'lishi kerak" })
  cost_estimate: string;

  @ApiProperty({
    description: "Zarar sanasi",
    example: "2024-08-01",
  })
  @IsDateString({}, { message: "Sana ISO formatda bo'lishi kerak" })
  damage_date: string;
}
