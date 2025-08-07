import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/common/guards/admin-auth.guard';
import { ManagerOnlyGuard } from '../auth/common/guards/manager-only.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Request, Response } from 'express';

@ApiTags("Admin - Administratorlar")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Manager faqat admin qo'sha oladi
  @ApiOperation({ summary: "Admin ro'yxatdan o'tkazish" })
  @ApiResponse({ status: 201, description: "Admin muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard, ManagerOnlyGuard)
  @Post("register")
  async register(@Body() createAdminDto: CreateAdminDto, @Req() req: any) {
    const currentAdminRole = req.user?.role || "ADMIN";
    return this.adminService.create(createAdminDto, currentAdminRole);
  }

  @ApiOperation({ summary: "Admin tizimga kirish" })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli kirish" })
  @ApiResponse({ status: 401, description: "Noto'g'ri ma'lumotlar" })
  @Post("login")
  async login(@Body() body: { email: string; password: string }, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.adminService.login(body.email, body.password);
    

    res.cookie("adminRefreshToken", refreshToken, {
      httpOnly: true,
      secure: false, 
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
      path: "/admin/refresh"
    });
    
    res.setHeader("Authorization", `Bearer ${accessToken}`);
    return { 
      message: "Admin login muvaffaqiyatli",
      success: true,
      accessToken,
      refreshToken
    };
  }

  @ApiOperation({ summary: "Admin token yangilash" })
  @ApiResponse({ status: 200, description: "Token yangilandi" })
  @ApiResponse({ status: 401, description: "Noto'g'ri refresh token" })
  @Post("refresh")
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const oldRefreshToken = req.cookies["adminRefreshToken"];
    const { accessToken, refreshToken } = await this.adminService.refreshToken(oldRefreshToken);
    
    res.cookie("adminRefreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
      path: "/admin/refresh"
    });

    res.setHeader("Authorization", `Bearer ${accessToken}`);
    
    return { 
      message: "Token yangilandi",
      success: true,
      accessToken,
      refreshToken
    };
  }

  @ApiOperation({ summary: "Admin tizimdan chiqish" })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli chiqish" })
  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    // Refresh token cookie ni o'chirish
    res.clearCookie("adminRefreshToken", { 
      path: "/admin/refresh",
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    });
   
    res.removeHeader("Authorization");
    
    return { 
      message: "Admin logout muvaffaqiyatli",
      success: true
    };
  }

  @ApiOperation({ summary: "Barcha admin'lar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Admin'lar ro'yxati" })
  @UseGuards(AdminAuthGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "Admin ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Admin ID" })
  @ApiResponse({ status: 200, description: "Admin ma'lumoti" })
  @ApiResponse({ status: 404, description: "Admin topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "Admin ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Admin ID" })
  @ApiResponse({ status: 200, description: "Admin yangilandi" })
  @ApiResponse({ status: 404, description: "Admin topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "Admin ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Admin ID" })
  @ApiResponse({ status: 200, description: "Admin o'chirildi" })
  @ApiResponse({ status: 404, description: "Admin topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
