import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
  IsDateString,
  IsIn,
  IsOptional,
} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreatePaymentsDto } from "./create-payment.dto";

export class UpdatePaymentsDto extends PartialType(CreatePaymentsDto) {
  @ApiPropertyOptional({
    description: "Ijara ID",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "Ijara ID raqam bo'lishi kerak" })
  rental_id?: number;

  @ApiPropertyOptional({
    description: "To'lov miqdori",
    example: 500000,
  })
  @IsOptional()
  @IsNumber({}, { message: "To'lov miqdori raqam bo'lishi kerak" })
  amount?: number;

  @ApiPropertyOptional({
    description: "To'lov sanasi ",
    example: "2024-01-15",
  })
  @IsOptional()
  @IsDateString(
    {},
    { message: "To'lov sanasi to'g'ri formatda bo'lishi kerak" }
  )
  payment_date?: string;

  @ApiPropertyOptional({
    description: "To'lov usuli ",
    example: "CASH",
    enum: ["CASH", "CARD", "TRANSFER"],
  })
  @IsOptional()
  @IsIn(["CASH", "CARD", "TRANSFER"], {
    message: "To'lov usuli to'g'ri bo'lishi kerak",
  })
  payment_method?: "CASH" | "CARD" | "TRANSFER";
}
