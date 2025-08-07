import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { CreateComplaintsDto } from "./dto/create-complaint.dto";
import { UpdateComplaintsDto } from "./dto/update-complaint.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ComplaintsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createComplaintDto: CreateComplaintsDto, currentUserId?: number) {
    if (currentUserId && createComplaintDto.user_id !== currentUserId) {
      throw new BadRequestException("Faqat o'z nomingizga shikoyat yarata olasiz");
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: createComplaintDto.user_id }
    });
    
    if (!user) {
      throw new BadRequestException("Foydalanuvchi topilmadi");
    }

    return await this.prismaService.complaints.create({
      data: createComplaintDto,
      include: { user: true, rental: true }
    });
  }

  async findAll() {
    return await this.prismaService.complaints.findMany({
      include: { user: true, rental: true }
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const complaint = await this.prismaService.complaints.findUnique({
      where: { id },
      include: { user: true, rental: true }
    });
    
    if (!complaint) {
      throw new NotFoundException("Shikoyat topilmadi");
    }

    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return complaint;
    }

    if (complaint.user_id !== currentUserId) {
      throw new BadRequestException("Faqat o'z shikoyatingizga kirishingiz mumkin");
    }
    
    return complaint;
  }

  async update(id: number, updateComplaintDto: UpdateComplaintsDto) {
    const existingComplaint = await this.prismaService.complaints.findUnique({
      where: { id }
    });
    
    if (!existingComplaint) {
      throw new NotFoundException("Shikoyat topilmadi");
    }

    return await this.prismaService.complaints.update({
      where: { id },
      data: updateComplaintDto,
      include: { user: true, rental: true }
    });
  }

  async remove(id: number) {
    const existingComplaint = await this.prismaService.complaints.findUnique({
      where: { id }
    });
    
    if (!existingComplaint) {
      throw new NotFoundException("Shikoyat topilmadi");
    }

    return await this.prismaService.complaints.delete({
      where: { id }
    });
  }
}
