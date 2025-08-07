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
import { ReviewsService } from "./reviews.service";
import { CreateReviewsDto } from "./dto/create-review.dto";
import { UpdateReviewsDto } from "./dto/update-review.dto";

@ApiTags("Reviews - Sharhlar")
@ApiBearerAuth()
@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiOperation({ summary: "Sharh yaratish" })
  @ApiResponse({ status: 201, description: "Sharh muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createReviewDto: CreateReviewsDto, @Req() req: any) {
    return this.reviewsService.create(createReviewDto, req.user.sub);
  }

  @ApiOperation({ summary: "Sharh ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Sharh ID" })
  @ApiResponse({ status: 200, description: "Sharh ma'lumoti" })
  @ApiResponse({ status: 404, description: "Sharh topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.reviewsService.findOne(+id, req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "Sharh ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Sharh ID" })
  @ApiResponse({ status: 200, description: "Sharh yangilandi" })
  @ApiResponse({ status: 404, description: "Sharh topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewsDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @ApiOperation({ summary: "Sharh ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Sharh ID" })
  @ApiResponse({ status: 200, description: "Sharh o'chirildi" })
  @ApiResponse({ status: 404, description: "Sharh topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reviewsService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha sharhlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Sharhlar ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }
}
