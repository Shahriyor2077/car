
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
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  try {
    console.log('🚀 Starting Car Rental API...');
    
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log'],
    });

    console.log('✅ NestJS app created successfully');

    const prisma = app.get(PrismaService);
    
    // Database connection'ni sinab ko'ramiz
    try {
      await prisma.$connect();
      console.log('✅ Database connected successfully');
    } catch (dbError) {
      console.error('❌ Database connection failed:', dbError);
      console.log('⚠️ Continuing without database connection...');
    }

    const managerEmail = 'manager@mail.com';
    const managerPassword = '12345678';

    // Manager ni faqat database ulangan bo'lsa yaratamiz
    try {
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
        console.log('✅ Manager created successfully');
      } else {
        console.log('✅ Manager already exists');
      }
    } catch (managerError) {
      console.log('⚠️ Manager creation skipped due to database error');
    }

    app.use(cookieParser());
    
    // Healthcheck endpoint'ini global prefix'dan oldin qo'shamiz
    const expressApp = app.getHttpAdapter().getInstance();
    expressApp.get('/', (req, res) => {
      console.log('🏥 Healthcheck endpoint called');
      res.status(200).json({ 
        status: 'OK', 
        message: 'Car Rental API is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      });
    });
    
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('Avto Ijara loyihasi')
      .setDescription('NestJS + Prisma REST API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    const PORT = process.env.PORT || 3000;
    console.log(`🌐 Starting server on port ${PORT}...`);
    
    await app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📘 Swagger docs at http://localhost:${PORT}/api/docs`);
      console.log(`🏥 Healthcheck at http://localhost:${PORT}/`);
    });
    
  } catch (error) {
    console.error('❌ Error starting application:', error);
    process.exit(1);
  }
}

bootstrap();
