"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentsService = class DocumentsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createDocumentDto, currentUserId) {
        if (currentUserId) {
            createDocumentDto.user_id = currentUserId;
        }
        const user = await this.prismaService.user.findUnique({
            where: { id: createDocumentDto.user_id },
        });
        if (!user) {
            throw new common_1.BadRequestException("Foydalanuvchi topilmadi");
        }
        const { user_id, ...documentData } = createDocumentDto;
        if (!currentUserId) {
            throw new common_1.BadRequestException("Foydalanuvchi ID topilmadi");
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
    async findOne(id, currentUserId, userRole) {
        const document = await this.prismaService.documents.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!document) {
            throw new common_1.NotFoundException("Hujjat topilmadi");
        }
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return document;
        }
        if (document.user_id !== currentUserId) {
            throw new common_1.BadRequestException("Faqat o'z hujjatingizga kirishingiz mumkin");
        }
        return document;
    }
    async update(id, updateDocumentDto) {
        const existingDocument = await this.prismaService.documents.findUnique({
            where: { id },
        });
        if (!existingDocument) {
            throw new common_1.NotFoundException("Hujjat topilmadi");
        }
        return await this.prismaService.documents.update({
            where: { id },
            data: updateDocumentDto,
            include: { user: true },
        });
    }
    async remove(id) {
        const existingDocument = await this.prismaService.documents.findUnique({
            where: { id },
        });
        if (!existingDocument) {
            throw new common_1.NotFoundException("Hujjat topilmadi");
        }
        return await this.prismaService.documents.delete({
            where: { id },
        });
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map