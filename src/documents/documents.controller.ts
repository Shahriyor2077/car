import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/common/guards/jwt-auth.guard";
import { AdminAuthGuard } from "../auth/common/guards/admin-auth.guard";
import { DocumentsService } from "./documents.service";
import { CreateDocumentsDto } from "./dto/create-document.dto";
import { UpdateDocumentsDto } from "./dto/update-document.dto";

@ApiTags("Documents - Hujjatlar")
@ApiBearerAuth()
@Controller("documents")
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @ApiOperation({ summary: "Hujjat yaratish" })
  @ApiResponse({ status: 201, description: "Hujjat muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDocumentDto: CreateDocumentsDto, @Req() req: any) {
    return this.documentsService.create(createDocumentDto, req.user.sub);
  }

  @ApiOperation({ summary: "Hujjat ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Hujjat ID" })
  @ApiResponse({ status: 200, description: "Hujjat ma'lumoti" })
  @ApiResponse({ status: 404, description: "Hujjat topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.documentsService.findOne(+id, req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "Hujjat ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Hujjat ID" })
  @ApiResponse({ status: 200, description: "Hujjat yangilandi" })
  @ApiResponse({ status: 404, description: "Hujjat topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDocumentDto: UpdateDocumentsDto) {
    return this.documentsService.update(+id, updateDocumentDto);
  }

  @ApiOperation({ summary: "Hujjat ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Hujjat ID" })
  @ApiResponse({ status: 200, description: "Hujjat o'chirildi" })
  @ApiResponse({ status: 404, description: "Hujjat topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.documentsService.remove(+id);
  }

  @ApiOperation({ summary: "Barcha hujjatlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Hujjatlar ro'yxati" })
  @UseGuards(AdminAuthGuard)
  @Get()
  findAll() {
    return this.documentsService.findAll();
  }
}
