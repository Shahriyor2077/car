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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const reviews_service_1 = require("./reviews.service");
const create_review_dto_1 = require("./dto/create-review.dto");
const update_review_dto_1 = require("./dto/update-review.dto");
let ReviewsController = class ReviewsController {
    reviewsService;
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    create(createReviewDto, req) {
        return this.reviewsService.create(createReviewDto, req.user.sub);
    }
    findOne(id, req) {
        return this.reviewsService.findOne(+id, req.user.sub, req.user.role);
    }
    update(id, updateReviewDto) {
        return this.reviewsService.update(+id, updateReviewDto);
    }
    remove(id) {
        return this.reviewsService.remove(+id);
    }
    findAll() {
        return this.reviewsService.findAll();
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sharh yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Sharh muvaffaqiyatli yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewsDto, Object]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sharh ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Sharh ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Sharh ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Sharh topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sharh ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Sharh ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Sharh yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Sharh topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_review_dto_1.UpdateReviewsDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sharh ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Sharh ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Sharh o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Sharh topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha sharhlar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Sharhlar ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findAll", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, swagger_1.ApiTags)("Reviews - Sharhlar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("reviews"),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=reviews.controller.js.map