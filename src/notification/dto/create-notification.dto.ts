import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateNotificationsDto {
  @ApiProperty({
    description: "Foydalanuvchi ID",
    example: 1
  })
  @IsNumber({}, { message: "user_id raqam bo'lishi kerak" })
  user_id: number;

  @ApiProperty({
    description: "Xabar matni",
    example: "Sizning buyurtmangiz tasdiqlandi."
  })
  @IsString({ message: "Xabar matn bo'lishi kerak" })
  @MinLength(3, { message: "Xabar kamida 3 ta harf bo'lishi kerak" })
  message: string;
}