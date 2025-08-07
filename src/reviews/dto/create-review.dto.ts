import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, IsOptional } from "class-validator";

export class CreateReviewsDto {
  @ApiPropertyOptional({
    description: "Foydalanuvchi ID",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" })
  user_id?: number;

  @ApiProperty({
    description: "Avtomobil ID",
    example: 1,
  })
  @IsNumber({}, { message: "Avtomobil ID raqam bo'lishi kerak" })
  car_id: number;

  @ApiProperty({
    description: "Baho (1-5)",
    example: "5",
  })
  @IsString({ message: "Baho matn bo'lishi kerak" })
  rating: string;
}
