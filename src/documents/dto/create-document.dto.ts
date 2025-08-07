import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength, IsOptional } from 'class-validator';

export class CreateDocumentsDto {
  @ApiPropertyOptional({
    description: 'Foydalanuvchi ID ',
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: 'user_id raqam bolishi kerak' })
  user_id?: number;

  @ApiProperty({
    description: 'Haydovchilik guvohnomasi raqami',
    example: 'AA1234567'
  })
  @IsString({ message: 'Hujjat raqami matn bolishi kerak' })
  @MinLength(5, { message: 'Hujjat raqami kamida 5 ta harf bolishi kerak' })
  deliver_license: string;
}