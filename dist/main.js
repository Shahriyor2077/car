"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const prisma_service_1 = require("./prisma/prisma.service");
const bcrypt = require("bcrypt");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    const prisma = app.get(prisma_service_1.PrismaService);
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
    }
    else {
    }
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Avto Ijara loyihasi')
        .setDescription('NestJS + Prisma REST API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    const PORT = process.env.PORT || 5000;
    await app.listen(PORT, () => {
        console.log(`🚀 Server http://localhost:${PORT}`);
        console.log(`📘 Swagger http://localhost:${PORT}/api/docs`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map