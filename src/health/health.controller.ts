import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  health() {
    return { 
      status: 'OK', 
      message: 'Car Rental API is running',
      timestamp: new Date().toISOString()
    };
  }
} 