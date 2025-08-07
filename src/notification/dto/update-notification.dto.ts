import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateNotificationsDto } from "./create-notification.dto";

export class UpdateNotificationsDto extends PartialType(CreateNotificationsDto) {
  @ApiPropertyOptional({
    description: "Foydalanuvchi ID ",
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: "user_id raqam bo'lishi kerak" })
  user_id?: number;

  @ApiPropertyOptional({
    description: "Xabar matni",
    example: "Sizning buyurtmangiz tasdiqlandi."
  })
  @IsOptional()
  @IsString({ message: "Xabar matn bo'lishi kerak" })
  @MinLength(3, { message: "Xabar kamida 3 ta harf bo'lishi kerak" })
  message?: string;
}
