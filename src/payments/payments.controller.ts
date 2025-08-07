import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/common/guards/jwt-auth.guard";
import { PaymentsService } from "./payments.service";
import { UpdatePaymentsDto } from "./dto/update-payment.dto";
import { CreatePaymentsDto } from "./dto/create-payment.dto";

@ApiTags("Payments - To'lovlar")
@ApiBearerAuth()
@Controller("payments")
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiOperation({ summary: "To'lov yaratish" })
  @ApiResponse({ status: 201, description: "To'lov yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPaymentDto: CreatePaymentsDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @ApiOperation({ summary: "To'lov ma'lumotini olish" })
  @ApiParam({ name: "id", description: "To'lov ID" })
  @ApiResponse({ status: 200, description: "To'lov ma'lumoti" })
  @ApiResponse({ status: 404, description: "To'lov topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.paymentsService.findOne(+id, req.user.sub, req.user.role);
  }

  @ApiOperation({ summary: "To'lov ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "To'lov ID" })
  @ApiResponse({ status: 200, description: "To'lov yangilandi" })
  @ApiResponse({ status: 404, description: "To'lov topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePaymentDto: UpdatePaymentsDto) {
    return this.paymentsService.update(+id, updatePaymentDto);
  }

  @ApiOperation({ summary: "To'lov ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "To'lov ID" })
  @ApiResponse({ status: 200, description: "To'lov o'chirildi" })
  @ApiResponse({ status: 404, description: "To'lov topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentsService.remove(+id);
  }

  @ApiOperation({ summary: "To'lovlar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "To'lovlar ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    return this.paymentsService.findAll(req.user.sub, req.user.role);
  }
}
