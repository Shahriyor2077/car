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
import { NotificationService } from "./notification.service";
import { CreateNotificationsDto } from "./dto/create-notification.dto";
import { UpdateNotificationsDto } from "./dto/update-notification.dto";

@ApiTags("Notification - Bildirishnomalar")
@ApiBearerAuth()
@Controller("notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @ApiOperation({ summary: "Bildirishnoma yaratish" })
  @ApiResponse({
    status: 201,
    description: "Bildirishnoma muvaffaqiyatli yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createNotificationDto: CreateNotificationsDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @ApiOperation({ summary: "Bildirishnoma ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Bildirishnoma ID" })
  @ApiResponse({ status: 200, description: "Bildirishnoma ma'lumoti" })
  @ApiResponse({ status: 404, description: "Bildirishnoma topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.notificationService.findOne(+id, req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "Bildirishnoma ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Bildirishnoma ID" })
  @ApiResponse({ status: 200, description: "Bildirishnoma yangilandi" })
  @ApiResponse({ status: 404, description: "Bildirishnoma topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateNotificationDto: UpdateNotificationsDto
  ) {
    return this.notificationService.update(+id, updateNotificationDto);
  }

  @ApiOperation({ summary: "Bildirishnoma ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Bildirishnoma ID" })
  @ApiResponse({ status: 200, description: "Bildirishnoma o'chirildi" })
  @ApiResponse({ status: 404, description: "Bildirishnoma topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.notificationService.remove(+id);
  }

  @ApiOperation({ summary: "Bildirishnomalar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Bildirishnomalar ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    return this.notificationService.findAll(req.user.sub, req.user.role);
  }
}
