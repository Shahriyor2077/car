import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateReviewsDto } from "./dto/create-review.dto";
import { UpdateReviewsDto } from "./dto/update-review.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ReviewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createReviewDto: CreateReviewsDto, currentUserId?: number) {
    if (currentUserId) {
      createReviewDto.user_id = currentUserId;
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: createReviewDto.user_id },
    });

    if (!user) {
      throw new BadRequestException("Foydalanuvchi topilmadi");
    }

    const car = await this.prismaService.car.findUnique({
      where: { id: createReviewDto.car_id },
    });

    if (!car) {
      throw new BadRequestException("Avtomobil topilmadi");
    }

    const { user_id, ...reviewData } = createReviewDto;

    if (!currentUserId) {
      throw new BadRequestException("Foydalanuvchi ID topilmadi");
    }

    return await this.prismaService.reviews.create({
      data: {
        ...reviewData,
        user_id: currentUserId,
      },
      include: { user: true, car: true },
    });
  }

  async findAll() {
    return await this.prismaService.reviews.findMany({
      include: { user: true, car: true },
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const review = await this.prismaService.reviews.findUnique({
      where: { id },
      include: { user: true, car: true },
    });

    if (!review) {
      throw new NotFoundException("Sharh topilmadi");
    }
    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return review;
    }

    if (review.user_id !== currentUserId) {
      throw new BadRequestException(
        "Faqat o'z sharhingizga kirishingiz mumkin"
      );
    }

    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewsDto) {
    const existingReview = await this.prismaService.reviews.findUnique({
      where: { id },
    });

    if (!existingReview) {
      throw new NotFoundException("Sharh topilmadi");
    }

    return await this.prismaService.reviews.update({
      where: { id },
      data: updateReviewDto,
      include: { user: true, car: true },
    });
  }

  async remove(id: number) {
    const existingReview = await this.prismaService.reviews.findUnique({
      where: { id },
    });

    if (!existingReview) {
      throw new NotFoundException("Sharh topilmadi");
    }

    return await this.prismaService.reviews.delete({
      where: { id },
    });
  }
}
