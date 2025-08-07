"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const company_module_1 = require("./company/company.module");
const branch_module_1 = require("./branch/branch.module");
const car_module_1 = require("./car/car.module");
const feature_module_1 = require("./feature/feature.module");
const car_feature_module_1 = require("./car_feature/car_feature.module");
const damage_module_1 = require("./damage/damage.module");
const payments_module_1 = require("./payments/payments.module");
const rental_module_1 = require("./rental/rental.module");
const car_images_module_1 = require("./car_images/car_images.module");
const car_maintenance_module_1 = require("./car_maintenance/car_maintenance.module");
const reviews_module_1 = require("./reviews/reviews.module");
const documents_module_1 = require("./documents/documents.module");
const complaints_module_1 = require("./complaints/complaints.module");
const notification_module_1 = require("./notification/notification.module");
const auth_module_1 = require("./auth/auth.module");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }), user_module_1.UserModule, prisma_module_1.PrismaModule, company_module_1.CompanyModule, branch_module_1.BranchModule, car_module_1.CarModule, feature_module_1.FeatureModule, car_feature_module_1.CarFeatureModule, damage_module_1.DamageModule, payments_module_1.PaymentsModule, rental_module_1.RentalModule, car_images_module_1.CarImagesModule, car_maintenance_module_1.CarMaintenanceModule, reviews_module_1.ReviewsModule, documents_module_1.DocumentsModule, complaints_module_1.ComplaintsModule, notification_module_1.NotificationModule, auth_module_1.AuthModule, admin_module_1.AdminModule],
        controllers: [],
        providers: [],
        exports: []
    })
], AppModule);
//# sourceMappingURL=app.module.js.map