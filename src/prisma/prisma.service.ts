import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(){
        super({
          datasources: {
            db: {
              url: "postgresql://postgres:shahriyor@localhost:5432/car_rental",
            },
          },
        });
    }

    async onModuleInit() {
        await this.$connect()
    }
    async onModuleDestroy() {
        await this.$disconnect()
    }

}