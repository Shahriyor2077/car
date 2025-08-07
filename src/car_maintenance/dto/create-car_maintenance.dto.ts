import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCarMaintenanceDto {
  @ApiProperty({
    description: "Avtomobil ID",
    example: 1,
  })
  @IsNumber({}, { message: "car_id raqam bo'lishi kerak" })
  car_id: number;

  @ApiProperty({
    description: "Xizmat sanasi",
    example: "2024-08-01",
  })
  @IsString({ message: "Sana matn bo'lishi kerak" })
  service_date: string;

  @ApiProperty({
    description: "Xizmat tavsifi",
    example: "Moy almashtirildi.",
  })
  @IsString({ message: "Tavsif matn bo'lishi kerak" })
  @MinLength(5, { message: "Tavsif kamida 5 ta harf bo'lishi kerak" })
  description: string;

  @ApiProperty({
    description: "Xizmat narxi",
    example: 500000,
  })
  @IsNumber({}, { message: "Narx raqam bo'lishi kerak" })
  cost: number;
}
