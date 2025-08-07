import { PartialType } from "@nestjs/mapped-types";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsNumber, IsString, IsPositive, IsIn, IsDateString } from "class-validator";
import { CreateRentalsDto } from "./create-rental.dto";

export class UpdateRentalsDto extends PartialType(CreateRentalsDto) {
  @ApiPropertyOptional({
    description: "Foydalanuvchi ID",
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Foydalanuvchi ID musbat raqam bo'lishi kerak" })
  user_id?: number;

  @ApiPropertyOptional({
    description: "Avtomobil ID",
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "Avtomobil ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Avtomobil ID musbat raqam bo'lishi kerak" })
  car_id?: number;

  @ApiPropertyOptional({
    description: "Ijara boshlanish sanasi",
    example: "2024-01-15"
  })
  @IsOptional()
  @IsDateString({}, { message: "Boshlanish sanasi to'g'ri formatda bo'lishi kerak" })
  start_date?: string;

  @ApiPropertyOptional({
    description: "Ijara tugash sanasi",
    example: "2024-01-20"
  })
  @IsOptional()
  @IsDateString({}, { message: "Tugash sanasi to'g'ri formatda bo'lishi kerak" })
  end_date?: string;

  @ApiPropertyOptional({
    description: "Umumiy narxi",
    example: 2500000
  })
  @IsOptional()
  @IsNumber({}, { message: "Narx raqam bo'lishi kerak" })
  @IsPositive({ message: "Narx musbat raqam bo'lishi kerak" })
  total_price?: number;

  @ApiPropertyOptional({
    description: "Ijara holati",
    example: "PENDING",
    enum: ["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"]
  })
  @IsOptional()
  @IsIn(["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"], { 
    message: "Holat PENDING, ACTIVE, COMPLETED yoki CANCELLED bo'lishi kerak" 
  })
  status?: "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
}