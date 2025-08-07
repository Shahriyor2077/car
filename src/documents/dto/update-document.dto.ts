import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateDocumentsDto } from "./create-document.dto";

export class UpdateDocumentsDto extends PartialType(CreateDocumentsDto) {
  @ApiPropertyOptional({
    description: "Foydalanuvchi ID",
    example: 1,
  })
  @IsOptional()
  @IsNumber({}, { message: "user_id raqam bolishi kerak" })
  user_id?: number;

  @ApiPropertyOptional({
    description: "Haydovchilik guvohnomasi raqami",
    example: "AA1234567",
  })
  @IsOptional()
  @IsString({ message: "Guvohnoma raqami matn bolishi kerak" })
  @MinLength(5, { message: "Guvohnoma raqami kamida 5 ta harf bolishi kerak" })
  deliver_license?: string;
}
