import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class RefreshTokenDto {
  @ApiProperty({
    description: "Refresh token",
    example: "sHaHrIyOr...",
  })
  @IsString({ message: "Refresh token matn bo'lishi kerak" })
  @IsNotEmpty({ message: "Refresh token bo'sh bo'lishi mumkin emas" })
  refreshToken: string;
}
