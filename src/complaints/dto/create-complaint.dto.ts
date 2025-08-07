import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateComplaintsDto {
  @ApiProperty({
    description: "Foydalanuvchi ID",
    example: 1
  })
  @IsNumber({}, { message: "user_id raqam bo'lishi kerak" })
  user_id: number;

  @ApiProperty({
    description: "Shikoyat matni",
    example: "Avtomobil kechikib yetkazildi."
  })
  @IsString({ message: "Shikoyat matn bo'lishi kerak" })
  @MinLength(5, { message: "Shikoyat kamida 5 ta harf bo'lishi kerak" })
  message: string;

  @ApiProperty({
    description: "Ijaraga olingan avtomobil ID",
    example: 10
  })
  @IsNumber({}, { message: "rental_id raqam bo'lishi kerak" })
  rental_id: number;
}