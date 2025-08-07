
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { PrismaService } from './prisma/prisma.service';
import { AdminRole } from '../generated/prisma';
import * as bcrypt from 'bcrypt';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './auth/common/logging/winston.logging';
import { AllExeptionsFilter } from './auth/common/errors/error.handling';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: new ConsoleLogger({
    //   colors: true,
    //   prefix: "Car-Rental",
    //   json: false
    // }),
    // logger: WinstonModule.createLogger(winstonConfig)

  });
  // app.useGlobalFilters(new AllExeptionsFilter());


  const prisma = app.get(PrismaService);
  await prisma.$connect();

  const managerEmail = 'manager@mail.com';
  const managerPassword = '12345678';

  await prisma.admin.deleteMany({
    where: { email: managerEmail }
  });

  const existingManager = await prisma.admin.findUnique({
    where: { email: managerEmail },
  });

  if (!existingManager) {
    const hashedPassword = await bcrypt.hash(managerPassword, 10);
    await prisma.admin.create({
      data: {
        full_name: 'Super Manager',
        email: managerEmail,
        password: hashedPassword, 
        role: 'MANAGER',
      },
    });
  } else {
  }

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Avto Ijara loyihasi')
    .setDescription('NestJS, Prisma REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT}`);
    console.log(`📘 Swagger http://localhost:${PORT}/api/docs`);
  });
}
bootstrap();
