import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
  IsPositive,
  IsIn,
  IsDateString,
} from "class-validator";

export class CreateRentalsDto {
  @ApiProperty({
    description: "Foydalanuvchi ID",
    example: 1,
  })
  @IsNumber({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Foydalanuvchi ID musbat raqam bo'lishi kerak" })
  user_id: number;

  @ApiProperty({
    description: "Avtomobil ID",
    example: 1,
  })
  @IsNumber({}, { message: "Avtomobil ID raqam bo'lishi kerak" })
  @IsPositive({ message: "Avtomobil ID musbat raqam bo'lishi kerak" })
  car_id: number;

  @ApiProperty({
    description: "Ijara boshlanish sanasi yyyy-mm-dd",
    example: "2024-01-15",
  })
  @IsDateString(
    {},
    { message: "Boshlanish sanasi to'g'ri formatda bo'lishi kerak" }
  )
  start_date: string;

  @ApiProperty({
    description: "Ijara tugash sanasi",
    example: "2024-01-20",
  })
  @IsDateString(
    {},
    { message: "Tugash sanasi to'g'ri formatda bo'lishi kerak" }
  )
  end_date: string;

  @ApiProperty({
    description: "Umumiy narxi",
    example: 2500000,
  })
  @IsNumber({}, { message: "Narx raqam bo'lishi kerak" })
  @IsPositive({ message: "Narx musbat raqam bo'lishi kerak" })
  total_price: number;

  @ApiProperty({
    description: "Ijara holati",
    example: "PENDING",
    enum: ["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"],
  })
  @IsIn(["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"], {
    message: "Holat PENDING, ACTIVE, COMPLETED yoki CANCELLED bo'lishi kerak",
  })
  status: "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
}
