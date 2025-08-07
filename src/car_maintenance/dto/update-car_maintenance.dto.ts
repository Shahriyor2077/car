import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateCarMaintenanceDto } from "./create-car_maintenance.dto";

export class UpdateCarMaintenanceDto extends PartialType(
  CreateCarMaintenanceDto
) {
  @ApiPropertyOptional({
    description: "Avtomobil ID",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "car_id raqam bo'lishi kerak" })
  car_id?: number;

  @ApiPropertyOptional({
    description: "Xizmat sanasi",
    example: "2024-08-01",
  })
  @IsOptional()
  @IsString({ message: "Sana matn bo'lishi kerak" })
  service_date?: string;

  @ApiPropertyOptional({
    description: "Xizmat tavsifi",
    example: "Moy almashtirildi.",
  })
  @IsOptional()
  @IsString({ message: "Tavsif matn bo'lishi kerak" })
  @MinLength(5, { message: "Tavsif kamida 5 ta harf bo'lishi kerak" })
  description?: string;

  @ApiPropertyOptional({
    description: "Xizmat narxi ",
    example: 500000,
  })
  @IsOptional()
  @IsNumber({}, { message: "Narx raqam bo'lishi kerak" })
  cost?: number;
}
