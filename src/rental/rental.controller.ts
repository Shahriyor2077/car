import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
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
import { RentalService } from "./rental.service";
import { CreateRentalsDto } from "./dto/create-rental.dto";
import { UpdateRentalsDto } from "./dto/update-rental.dto";

@ApiTags("Rental - Ijara")
@ApiBearerAuth()
@Controller("rental")
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @ApiOperation({ summary: "Ijara yaratish" })
  @ApiResponse({ status: 201, description: "Ijara yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRentalDto: CreateRentalsDto, @Req() req: any) {
    return this.rentalService.create(createRentalDto, req.user.sub);
  }

  @ApiOperation({ summary: "Ijara ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Ijara ID" })
  @ApiResponse({ status: 200, description: "Ijara ma'lumoti" })
  @ApiResponse({ status: 404, description: "Ijara topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.rentalService.findOne(+id, req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "Barcha ijara ma'lumotlarini olish" })
  @ApiResponse({ status: 200, description: "Ijara ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    return this.rentalService.findAll(req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "Ijara ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Ijara ID" })
  @ApiResponse({ status: 200, description: "Ijara yangilandi" })
  @ApiResponse({ status: 404, description: "Ijara topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateRentalDto: UpdateRentalsDto,
    @Req() req: any
  ) {
    return this.rentalService.update(+id, updateRentalDto, req.user.role);
  }

  @ApiOperation({ summary: "Ijara ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Ijara ID" })
  @ApiResponse({ status: 200, description: "Ijara o'chirildi" })
  @ApiResponse({ status: 404, description: "Ijara topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string, @Req() req: any) {
    return this.rentalService.remove(+id, req.user.role);
  }
}
