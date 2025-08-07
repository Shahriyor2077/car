import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCarImagesDto {
  @ApiProperty({
    description: "Avtomobil ID",
    example: 1
  })
  @IsNumber({}, { message: "car_id raqam bolishi kerak" })
  car_id: number;

  @ApiProperty({
    description: "Rasm URL yoki fayl nomi",
    example: "car1.jpg"
  })
  @IsString({ message: "Rasm matn bo'lishi kerak" })
  @MinLength(3, { message: "Rasm nomi kamida 3 ta harf bo'lishi kerak" })
  image: string;
}