import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
  MinLength,
  IsDateString,
  IsOptional,
} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateDamagesDto } from "./create-damage.dto";

export class UpdateDamagesDto extends PartialType(CreateDamagesDto) {
  @ApiPropertyOptional({
    description: "Ijaraga olingan avtomobil ID",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "rental_id raqam bo'lishi kerak" })
  rental_id?: number;

  @ApiPropertyOptional({
    description: "Zarar tavsifi ",
    example: "Old bamperda tirnalgan joy bor.",
  })
  @IsOptional()
  @IsString({ message: "Tavsif matn bo'lishi kerak" })
  @MinLength(5, { message: "Tavsif kamida 5 ta harf bo'lishi kerak" })
  description?: string;

  @ApiPropertyOptional({
    description: "Zarar qiymati",
    example: "500000",
  })
  @IsOptional()
  @IsString({ message: "Qiymat matn bo'lishi kerak" })
  cost_estimate?: string;

  @ApiPropertyOptional({
    description: "Zarar sanasi",
    example: "2024-08-01",
  })
  @IsOptional()
  @IsDateString({}, { message: "Sana ISO formatda bo'lishi kerak" })
  damage_date?: string;
}
