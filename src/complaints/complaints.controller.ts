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
import { ComplaintsService } from "./complaints.service";
import { CreateComplaintsDto } from "./dto/create-complaint.dto";
import { UpdateComplaintsDto } from "./dto/update-complaint.dto";

@ApiTags("Complaints - Shikoyatlar")
@ApiBearerAuth()
@Controller("complaints")
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  @ApiOperation({ summary: "Shikoyat yaratish" })
  @ApiResponse({
    status: 201,
    description: "Shikoyat yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createComplaintDto: CreateComplaintsDto, @Req() req: any) {
    return this.complaintsService.create(createComplaintDto, req.user.sub);
  }

  @ApiOperation({ summary: "Shikoyat ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Shikoyat ID" })
  @ApiResponse({ status: 200, description: "Shikoyat ma'lumoti" })
  @ApiResponse({ status: 404, description: "Shikoyat topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.complaintsService.findOne(+id, req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "Shikoyat ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Shikoyat ID" })
  @ApiResponse({ status: 200, description: "Shikoyat yangilandi" })
  @ApiResponse({ status: 404, description: "Shikoyat topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateComplaintDto: UpdateComplaintsDto
  ) {
    return this.complaintsService.update(+id, updateComplaintDto);
  }

  @ApiOperation({ summary: "Shikoyat ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Shikoyat ID" })
  @ApiResponse({ status: 200, description: "Shikoyat o'chirildi" })
  @ApiResponse({ status: 404, description: "Shikoyat topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.complaintsService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha shikoyatlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Shikoyatlar ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.complaintsService.findAll();
  }
}
