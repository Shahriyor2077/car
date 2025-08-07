import { Controller, Post, Body, Get, Query, Req, Res } from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { LoginDto } from "../user/dto/login.dto";
import { Request, Response } from "express";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Foydalanuvchi ro'yxatdan o'tkazish" })
  @ApiResponse({
    status: 201,
    description: "Foydalanuvchi muvaffaqiyatli yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @Post("register")
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @ApiOperation({ summary: "Foydalanuvchi faollashtirish" })
  @ApiResponse({ status: 200, description: "Foydalanuvchi faollashtirildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri aktivatsiya havolasi" })
  @Get("activate")
  async activate(@Query("link") link: string) {
    return this.authService.activate(link);
  }

  @ApiOperation({ summary: "Foydalanuvchi tizimga kirish" })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli kirish" })
  @ApiResponse({ status: 401, description: "Noto'g'ri ma'lumotlar" })
  @Post("login")
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { accessToken, refreshToken } = await this.authService.login(
      dto.email,
      dto.password
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      message: "User login muvaffaqiyatli",
      success: true,
      accessToken,
      refreshToken,
    };
  }

  @ApiOperation({ summary: "Token yangilash" })
  @ApiResponse({ status: 200, description: "Token yangilandi" })
  @ApiResponse({ status: 401, description: "Noto'g'ri refresh token" })
  @Post("refresh")
  async refresh(
    @Req() req: Request,
    @Body() body: any,
    @Res({ passthrough: true }) res: Response
  ) {
    const oldRefreshToken = req.cookies["refreshToken"] || body?.refreshToken;
    const { accessToken, refreshToken } =
      await this.authService.refreshToken(oldRefreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      message: "Token yangilandi",
      success: true,
      accessToken,
      refreshToken,
    };
  }

  @ApiOperation({ summary: "Tizimdan chiqish" })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli chiqish" })
  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
    });

    return {
      message: "Logout muvaffaqiyatli",
      success: true,
    };
  }
}
