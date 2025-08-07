import { Module } from "@nestjs/common";
import { CarFeatureService } from "./car_feature.service";
import { CarFeatureController } from "./car_feature.controller";
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
  controllers: [CarFeatureController],
  providers: [CarFeatureService],
})
export class CarFeatureModule {}
