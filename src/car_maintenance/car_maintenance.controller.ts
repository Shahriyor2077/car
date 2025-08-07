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
import { CarMaintenanceService } from "./car_maintenance.service";
import { CreateCarMaintenanceDto } from "./dto/create-car_maintenance.dto";
import { UpdateCarMaintenanceDto } from "./dto/update-car_maintenance.dto";

@ApiTags("Car Maintenance - Texnik Xizmat")
@ApiBearerAuth()
@Controller("car-maintenance")
export class CarMaintenanceController {
  constructor(private readonly carMaintenanceService: CarMaintenanceService) {}

  @ApiOperation({ summary: "Texnik xizmat yaratish" })
  @ApiResponse({
    status: 201,
    description: "Texnik xizmat yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createCarMaintenanceDto: CreateCarMaintenanceDto) {
    return this.carMaintenanceService.create(createCarMaintenanceDto);
  }

  @ApiOperation({ summary: "Texnik xizmat ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Texnik xizmat ID" })
  @ApiResponse({ status: 200, description: "Texnik xizmat ma'lumoti" })
  @ApiResponse({ status: 404, description: "Texnik xizmat topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.carMaintenanceService.findOne(+id);
  }

  @ApiOperation({ summary: "Texnik xizmat ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Texnik xizmat ID" })
  @ApiResponse({ status: 200, description: "Texnik xizmat yangilandi" })
  @ApiResponse({ status: 404, description: "Texnik xizmat topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCarMaintenanceDto: UpdateCarMaintenanceDto
  ) {
    return this.carMaintenanceService.update(+id, updateCarMaintenanceDto);
  }

  @ApiOperation({ summary: "Texnik xizmat ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Texnik xizmat ID" })
  @ApiResponse({ status: 200, description: "Texnik xizmat o'chirildi" })
  @ApiResponse({ status: 404, description: "Texnik xizmat topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.carMaintenanceService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha texnik xizmatlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Texnik xizmatlar ro'yxati" })
  @Get()
  findAll() {
    return this.carMaintenanceService.findAll();
  }
}
