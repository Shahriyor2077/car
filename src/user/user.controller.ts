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
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiTags("User - Foydalanuvchilar")
@ApiBearerAuth()
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Foydalanuvchi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Foydalanuvchi yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumot" })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchi ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Foydalanuvchi ID" })
  @ApiResponse({ status: 200, description: "Foydalanuvchi ma'lumoti" })
  @ApiResponse({ status: 404, description: "Foydalanuvchi topilmadi" })
  @UseGuards(JwtAuthGuard, SelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchi ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Foydalanuvchi ID" })
  @ApiResponse({ status: 200, description: "Foydalanuvchi yangilandi" })
  @ApiResponse({ status: 404, description: "Foydalanuvchi topilmadi" })
  @UseGuards(JwtAuthGuard, SelfGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchi ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Foydalanuvchi ID" })
  @ApiResponse({ status: 200, description: "Foydalanuvchi o'chirildi" })
  @ApiResponse({ status: 404, description: "Foydalanuvchi topilmadi" })
  @UseGuards(JwtAuthGuard, SelfGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha foydalanuvchilar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Foydalanuvchilar ro'yxati" })
  @UseGuards(AdminAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
