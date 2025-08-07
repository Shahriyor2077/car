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
import { CarFeatureService } from "./car_feature.service";
import { CreateCarFeatureDto } from "./dto/create-car_feature.dto";
import { UpdateCarFeatureDto } from "./dto/update-car_feature.dto";

@ApiTags("Car Feature - Avtomobil Xususiyatlari")
@ApiBearerAuth()
@Controller("car-feature")
export class CarFeatureController {
  constructor(private readonly carFeatureService: CarFeatureService) {}

  @ApiOperation({ summary: "Avtomobil xususiyati yaratish" })
  @ApiResponse({ status: 201, description: "Avtomobil xususiyati yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createCarFeatureDto: CreateCarFeatureDto) {
    return this.carFeatureService.create(createCarFeatureDto);
  }

  @ApiOperation({ summary: "Avtomobil xususiyati ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Avtomobil xususiyati ID" })
  @ApiResponse({ status: 200, description: "Avtomobil xususiyati ma'lumoti" })
  @ApiResponse({ status: 404, description: "Avtomobil xususiyati topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.carFeatureService.findOne(+id);
  }

  @ApiOperation({ summary: "Avtomobil xususiyati ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Avtomobil xususiyati ID" })
  @ApiResponse({ status: 200, description: "Avtomobil xususiyati yangilandi" })
  @ApiResponse({ status: 404, description: "Avtomobil xususiyati topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCarFeatureDto: UpdateCarFeatureDto
  ) {
    return this.carFeatureService.update(+id, updateCarFeatureDto);
  }

  @ApiOperation({ summary: "Avtomobil xususiyati ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Avtomobil xususiyati ID" })
  @ApiResponse({ status: 200, description: "Avtomobil xususiyati o'chirildi" })
  @ApiResponse({ status: 404, description: "Avtomobil xususiyati topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.carFeatureService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha avtomobil xususiyatlari ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Avtomobil xususiyatlari ro'yxati" })
  @Get()
  findAll() {
    return this.carFeatureService.findAll();
  }
}
