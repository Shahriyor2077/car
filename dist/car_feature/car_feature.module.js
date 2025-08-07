"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFeatureModule = void 0;
const common_1 = require("@nestjs/common");
const car_feature_service_1 = require("./car_feature.service");
const car_feature_controller_1 = require("./car_feature.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const admin_module_1 = require("../admin/admin.module");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let CarFeatureModule = class CarFeatureModule {
};
exports.CarFeatureModule = CarFeatureModule;
exports.CarFeatureModule = CarFeatureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            admin_module_1.AdminModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get("JWT_ACCESS_SECRET") ||
                        "my_access_secret_key",
                    signOptions: { expiresIn: "3d" },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [car_feature_controller_1.CarFeatureController],
        providers: [car_feature_service_1.CarFeatureService],
    })
], CarFeatureModule);
//# sourceMappingURL=car_feature.module.js.map