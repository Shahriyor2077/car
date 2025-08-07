import { Logger, Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompanyModule } from './company/company.module';
import { BranchModule } from './branch/branch.module';
import { CarModule } from './car/car.module';
import { FeatureModule } from './feature/feature.module';
import { CarFeatureModule } from './car_feature/car_feature.module';
import { DamageModule } from './damage/damage.module';
import { PaymentsModule } from './payments/payments.module';
import { RentalModule } from './rental/rental.module';
import { CarImagesModule } from './car_images/car_images.module';
import { CarMaintenanceModule } from './car_maintenance/car_maintenance.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DocumentsModule } from './documents/documents.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Global()
@Module({
  imports: [ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}), UserModule, PrismaModule, CompanyModule, BranchModule, CarModule, FeatureModule, CarFeatureModule, DamageModule, PaymentsModule, RentalModule, CarImagesModule, CarMaintenanceModule, ReviewsModule, DocumentsModule, ComplaintsModule, NotificationModule, AuthModule, AdminModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
