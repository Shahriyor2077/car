import { Module } from "@nestjs/common";
import { CarMaintenanceService } from "./car_maintenance.service";
import { CarMaintenanceController } from "./car_maintenance.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { AdminModule } from "../admin/admin.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    PrismaModule,
    AdminModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret:
          configService.get<string>("JWT_ACCESS_SECRET") ||
          "my_access_secret_key",
        signOptions: { expiresIn: "3d" },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [CarMaintenanceController],
  providers: [CarMaintenanceService],
})
export class CarMaintenanceModule {}
