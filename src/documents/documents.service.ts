import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateDocumentsDto } from "./dto/create-document.dto";
import { UpdateDocumentsDto } from "./dto/update-document.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DocumentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDocumentDto: CreateDocumentsDto, currentUserId?: number) {
    if (currentUserId) {
      createDocumentDto.user_id = currentUserId;
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: createDocumentDto.user_id },
    });

    if (!user) {
      throw new BadRequestException("Foydalanuvchi topilmadi");
    }
    const { user_id, ...documentData } = createDocumentDto;

    if (!currentUserId) {
      throw new BadRequestException("Foydalanuvchi ID topilmadi");
    }

    return await this.prismaService.documents.create({
      data: {
        ...documentData,
        user_id: currentUserId,
      },
      include: { user: true },
    });
  }

  async findAll() {
    return await this.prismaService.documents.findMany({
      include: { user: true },
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const document = await this.prismaService.documents.findUnique({
      where: { id },
      include: { user: true },
    });
    if (!document) {
      throw new NotFoundException("Hujjat topilmadi");
    }
    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return document;
    }
    if (document.user_id !== currentUserId) {
      throw new BadRequestException(
        "Faqat o'z hujjatingizga kirishingiz mumkin"
      );
    }

    return document;
  }

  async update(id: number, updateDocumentDto: UpdateDocumentsDto) {
    const existingDocument = await this.prismaService.documents.findUnique({
      where: { id },
    });

    if (!existingDocument) {
      throw new NotFoundException("Hujjat topilmadi");
    }
    return await this.prismaService.documents.update({
      where: { id },
      data: updateDocumentDto,
      include: { user: true },
    });
  }

  async remove(id: number) {
    const existingDocument = await this.prismaService.documents.findUnique({
      where: { id },
    });
    if (!existingDocument) {
      throw new NotFoundException("Hujjat topilmadi");
    }
    return await this.prismaService.documents.delete({
      where: { id },
    });
  }
}
