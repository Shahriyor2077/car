import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsDateString, IsIn } from "class-validator";

export class CreatePaymentsDto {
  @ApiProperty({
    description: "Ijara ID",
    example: 1,
  })
  @IsNumber({}, { message: "Ijara ID raqam bo'lishi kerak" })
  rental_id: number;

  @ApiProperty({
    description: "To'lov miqdori",
    example: 500000,
  })
  @IsNumber({}, { message: "To'lov miqdori raqam bo'lishi kerak" })
  amount: number;

  @ApiProperty({
    description: "To'lov sanasi",
    example: "2024-01-15",
  })
  @IsDateString(
    {},
    { message: "To'lov sanasi to'g'ri formatda bo'lishi kerak" }
  )
  payment_date: string;

  @ApiProperty({
    description: "To'lov usuli",
    example: "CASH",
    enum: ["CASH", "CARD", "TRANSFER"],
  })
  @IsIn(["CASH", "CARD", "TRANSFER"], {
    message: "To'lov usuli to'g'ri bo'lishi kerak",
  })
  payment_method: "CASH" | "CARD" | "TRANSFER";
}
