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
import { SelfGuard } from "../auth/common/guards/self.guard";
import { AdminAuthGuard } from "../auth/common/guards/admin-auth.guard";
import { DamageService } from "./damage.service";
import { CreateDamagesDto } from "./dto/create-damage.dto";
import { UpdateDamagesDto } from "./dto/update-damage.dto";

@ApiTags("Damage - Zararlar")
@ApiBearerAuth()
@Controller("damage")
export class DamageController {
  constructor(private readonly damageService: DamageService) {}

  @ApiOperation({ summary: "Zarar yaratish" })
  @ApiResponse({ status: 201, description: "Zarar yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDamageDto: CreateDamagesDto) {
    return this.damageService.create(createDamageDto);
  }

  @ApiOperation({ summary: "Zarar ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Zarar ID" })
  @ApiResponse({ status: 200, description: "Zarar ma'lumoti" })
  @ApiResponse({ status: 404, description: "Zarar topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.damageService.findOne(+id);
  }

  @ApiOperation({ summary: "Zarar ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Zarar ID" })
  @ApiResponse({ status: 200, description: "Zarar yangilandi" })
  @ApiResponse({ status: 404, description: "Zarar topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDamageDto: UpdateDamagesDto) {
    return this.damageService.update(+id, updateDamageDto);
  }

  @ApiOperation({ summary: "Zarar ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Zarar ID" })
  @ApiResponse({ status: 200, description: "Zarar o'chirildi" })
  @ApiResponse({ status: 404, description: "Zarar topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.damageService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha zararlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Zararlar ro'yxati" })
  @UseGuards(AdminAuthGuard)
  @Get()
  findAll() {
    return this.damageService.findAll();
  }
}
