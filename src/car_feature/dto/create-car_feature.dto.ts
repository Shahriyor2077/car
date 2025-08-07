import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCarFeatureDto {
  @ApiProperty({
    description: "Avtomobil ID",
    example: 1,
  })
  @IsNumber({}, { message: "car_id raqam bo'lishi kerak" })
  car_id: number;

  @ApiProperty({
    description: "Xususiyat ID",
    example: 2,
  })
  @IsNumber({}, { message: "feature_id raqam bo'lishi kerak" })
  feature_id: number;
}
