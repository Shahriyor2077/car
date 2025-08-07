import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateCarFeatureDto } from "./create-car_feature.dto";

export class UpdateCarFeatureDto extends PartialType(CreateCarFeatureDto) {
  @ApiPropertyOptional({
    description: "Avtomobil ID ",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "car_id raqam bolishi kerak" })
  car_id?: number;

  @ApiPropertyOptional({
    description: "Xususiyat ID ",
    example: 2,
  })
  @IsOptional()
  @IsNumber({}, { message: "feature_id raqam bolishi kerak" })
  feature_id?: number;
}
