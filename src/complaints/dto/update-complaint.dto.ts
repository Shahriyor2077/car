import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateComplaintsDto } from "./create-complaint.dto";

export class UpdateComplaintsDto extends PartialType(CreateComplaintsDto) {
  @ApiPropertyOptional({
    description: "Foydalanuvchi ID ",
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "user_id raqam bo'lishi kerak" })
  user_id?: number;

  @ApiPropertyOptional({
    description: "Shikoyat matni ",
    example: "Avtomobil kechikib yetkazildi."
  })
  @IsOptional()
  @IsString({ message: "Shikoyat matn bo'lishi kerak" })
  @MinLength(5, { message: "Shikoyat kamida 5 ta harf bo'lishi kerak" })
  message?: string;

  @ApiPropertyOptional({
    description: "Ijaraga olingan avtomobil ID ",
    example: 10
  })
  @IsOptional()
  @IsNumber({}, { message: "rental_id raqam bo'lishi kerak" })
  rental_id?: number;
}
        