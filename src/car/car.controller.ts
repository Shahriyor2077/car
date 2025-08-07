import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/common/guards/jwt-auth.guard';
import { ManagerOnlyGuard } from '../auth/common/guards/manager-only.guard';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags("Car - Avtomobillar")
@ApiBearerAuth()
@Controller("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: "Avtomobil yaratish" })
  @ApiResponse({ status: 201, description: "Avtomobil muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(ManagerOnlyGuard)
  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    return await this.carService.create(createCarDto);
  }

  @ApiOperation({ summary: "Barcha avtomobillar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Avtomobillar ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @ApiOperation({ summary: "Avtomobillarni rangi bo'yicha qidirish" })
  @ApiQuery({ name: "color", required: true, description: "Avtomobil rangi" })
  @ApiResponse({ status: 200, description: "Rang bo'yicha topilgan avtomobillar" })
  @UseGuards(JwtAuthGuard)
  @Get("search/color")
  findByColor(@Query("color") color: string) {
    return this.carService.findByColor(color);
  }

  @ApiOperation({ summary: "Avtomobillarni yili bo'yicha qidirish" })
  @ApiQuery({ name: "year", required: true, description: "Avtomobil yili" })
  @ApiResponse({ status: 200, description: "Yil bo'yicha topilgan avtomobillar" })
  @UseGuards(JwtAuthGuard)
  @Get("search/year")
  findByYear(@Query("year") year: string) {
    return this.carService.findByYear(year);
  }

  @ApiOperation({ summary: "Avtomobillarni narxi bo'yicha qidirish" })
  @ApiQuery({ name: "minPrice", required: false, description: "Minimal narx" })
  @ApiQuery({ name: "maxPrice", required: false, description: "Maksimal narx" })
  @ApiResponse({ status: 200, description: "Narx bo'yicha topilgan avtomobillar" })
  @UseGuards(JwtAuthGuard)
  @Get("search/price")
  findByPrice(
    @Query("minPrice") minPrice?: string,
    @Query("maxPrice") maxPrice?: string
  ) {
    return this.carService.findByPrice(
      minPrice ? +minPrice : undefined,
      maxPrice ? +maxPrice : undefined
    );
  }

  @ApiOperation({ summary: "Avtomobillarni reytingi bo'yicha qidirish" })
  @ApiQuery({ name: "minRating", required: false, description: "Minimal reyting" })
  @ApiQuery({ name: "maxRating", required: false, description: "Maksimal reyting" })
  @ApiResponse({ status: 200, description: "Reyting bo'yicha topilgan avtomobillar" })
  @UseGuards(JwtAuthGuard)
  @Get("search/rating")
  findByRating(@Query("minRating") minRating?: string, @Query("maxRating") maxRating?: string) {
    return this.carService.findByRating(minRating ? +minRating : undefined, maxRating ? +maxRating : undefined);
  }

  @ApiOperation({ summary: "Avtomobil ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Avtomobil ID" })
  @ApiResponse({ status: 200, description: "Avtomobil ma'lumoti" })
  @ApiResponse({ status: 404, description: "Avtomobil topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.carService.findOne(+id);
  }

  @ApiOperation({ summary: "Avtomobil ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Avtomobil ID" })
  @ApiResponse({ status: 200, description: "Avtomobil yangilandi" })
  @ApiResponse({ status: 404, description: "Avtomobil topilmadi" })
  @UseGuards(ManagerOnlyGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @ApiOperation({ summary: "Avtomobil ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Avtomobil ID" })
  @ApiResponse({ status: 200, description: "Avtomobil o'chirildi" })
  @ApiResponse({ status: 404, description: "Avtomobil topilmadi" })
  @UseGuards(ManagerOnlyGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.carService.remove(+id);
  }
}
