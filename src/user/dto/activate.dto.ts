import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class ActivateDto {
  @ApiProperty({
    description: "Aktivlash kodi",
    example: "123456",
  })
  @IsString({ message: "Aktivlash kodi matn bo'lishi kerak" })
  @IsNotEmpty({ message: "Aktivlash kodi bo'sh bo'lishi mumkin emas" })
  code: string;
}
