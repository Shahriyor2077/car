import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/common/guards/jwt-auth.guard";
import { AdminAuthGuard } from "../auth/common/guards/admin-auth.guard";
import { FeatureService } from "./feature.service";
import { CreateFeatureDto } from "./dto/create-feature.dto";
import { UpdateFeatureDto } from "./dto/update-feature.dto";

@ApiTags("Feature - Xususiyatlar")
@ApiBearerAuth()
@Controller("feature")
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @ApiOperation({ summary: "Xususiyat yaratish" })
  @ApiResponse({ status: 201, description: "Xususiyat yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createFeatureDto: CreateFeatureDto) {
    return this.featureService.create(createFeatureDto);
  }

  @ApiOperation({ summary: "Barcha xususiyatlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Xususiyatlar ro'yxati" })
  @Get()
  findAll() {
    return this.featureService.findAll();
  }

  @ApiOperation({ summary: "Xususiyat ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Xususiyat ID" })
  @ApiResponse({ status: 200, description: "Xususiyat ma'lumoti" })
  @ApiResponse({ status: 404, description: "Xususiyat topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.featureService.findOne(+id);
  }

  @ApiOperation({ summary: "Xususiyat ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Xususiyat ID" })
  @ApiResponse({ status: 200, description: "Xususiyat yangilandi" })
  @ApiResponse({ status: 404, description: "Xususiyat topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateFeatureDto: UpdateFeatureDto) {
    return this.featureService.update(+id, updateFeatureDto);
  }

  @ApiOperation({ summary: "Xususiyat ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Xususiyat ID" })
  @ApiResponse({ status: 200, description: "Xususiyat o'chirildi" })
  @ApiResponse({ status: 404, description: "Xususiyat topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.featureService.remove(+id);
  }
}
