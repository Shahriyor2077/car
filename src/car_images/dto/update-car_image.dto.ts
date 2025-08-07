import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCarImagesDto } from './create-car_image.dto';

export class UpdateCarImagesDto extends PartialType(CreateCarImagesDto) {
  @ApiPropertyOptional({
    description: 'Avtomobil ID',
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "car_id raqam bo'lishi kerak" })
  car_id?: number;

  @ApiPropertyOptional({
    description: 'Rasm URL yoki fayl nomi',
    example: 'car1.jpg'
  })
  @IsOptional()
  @IsString({ message: "Rasm matn bo'lishi kerak" })
  @MinLength(3, { message: "Rasm nomi kamida 3 ta harf bo'lishi kerak" })
  image?: string;
}