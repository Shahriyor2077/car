import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateReviewsDto } from "./create-review.dto";

export class UpdateReviewsDto extends PartialType(CreateReviewsDto) {
  @ApiPropertyOptional({
    description: "Foydalanuvchi id",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" })
  user_id?: number;

  @ApiPropertyOptional({
    description: "Avtomobil ID",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "Avtomobil ID raqam bo'lishi kerak" })
  car_id?: number;

  @ApiPropertyOptional({
    description: "Sharh matni",
    example: "Avtomobil juda yaxshi ishlaydi",
  })
  @IsOptional()
  @IsString({ message: "Sharh matn bo'lishi kerak" })
  @MinLength(10, { message: "Sharh kamida 10 ta harf bo'lishi kerak" })
  @MaxLength(500, { message: "Sharh 500 ta harfdan oshmasligi kerak" })
  comment?: string;

  @ApiPropertyOptional({
    description: "Baho (1-5)",
    example: "5",
  })
  @IsOptional()
  @IsString({ message: "Baho matn bo'lishi kerak" })
  rating?: string;
}
