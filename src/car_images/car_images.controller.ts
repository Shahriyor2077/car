import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/common/guards/jwt-auth.guard";
import { AdminAuthGuard } from "../auth/common/guards/admin-auth.guard";
import { CarImagesService } from "./car_images.service";
import { CreateCarImagesDto } from "./dto/create-car_image.dto";
import { UpdateCarImagesDto } from "./dto/update-car_image.dto";

@ApiTags("Car Images - Avtomobil Rasmlari")
@ApiBearerAuth()
@Controller("car-images")
export class CarImagesController {
  constructor(private readonly carImagesService: CarImagesService) {}

  @ApiOperation({ summary: "Avtomobil rasmi yaratish" })
  @ApiResponse({ status: 201, description: "Avtomobil rasmi yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createCarImageDto: CreateCarImagesDto) {
    return this.carImagesService.create(createCarImageDto);
  }

  @ApiOperation({ summary: "Avtomobil rasmi ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Avtomobil rasmi ID" })
  @ApiResponse({ status: 200, description: "Avtomobil rasmi ma'lumoti" })
  @ApiResponse({ status: 404, description: "Avtomobil rasmi topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.carImagesService.findOne(+id);
  }

  @ApiOperation({ summary: "Avtomobil rasmi ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Avtomobil rasmi ID" })
  @ApiResponse({ status: 200, description: "Avtomobil rasmi yangilandi" })
  @ApiResponse({ status: 404, description: "Avtomobil rasmi topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCarImageDto: UpdateCarImagesDto
  ) {
    return this.carImagesService.update(+id, updateCarImageDto);
  }

  @ApiOperation({ summary: "Avtomobil rasmi ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Avtomobil rasmi ID" })
  @ApiResponse({ status: 200, description: "Avtomobil rasmi o'chirildi" })
  @ApiResponse({ status: 404, description: "Avtomobil rasmi topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.carImagesService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha avtomobil rasmlari ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Avtomobil rasmlari ro'yxati" })
  @Get()
  findAll() {
    return this.carImagesService.findAll();
  }
}
