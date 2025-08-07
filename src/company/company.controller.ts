import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/common/guards/jwt-auth.guard";
import { ManagerOnlyGuard } from "../auth/common/guards/manager-only.guard";
import { CompanyService } from "./company.service";
import { CreateCompaniesDto } from "./dto/create-company.dto";
import { UpdateCompaniesDto } from "./dto/update-company.dto";

@ApiTags("Company - Kompaniyalar")
@ApiBearerAuth()
@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiOperation({ summary: "Barcha kompaniyalar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Kompaniyalar ro'yxati" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    try {
      const result = await this.companyService.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  @ApiOperation({ summary: "Kompaniya ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Kompaniya ID" })
  @ApiResponse({ status: 200, description: "Kompaniya ma'lumoti" })
  @ApiResponse({ status: 404, description: "Kompaniya topilmadi" })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.companyService.findOne(+id);
  }

  @ApiOperation({ summary: "Kompaniya yaratish" })
  @ApiResponse({
    status: 201,
    description: "Kompaniya yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(ManagerOnlyGuard)
  @Post()
  create(@Body() createCompanyDto: CreateCompaniesDto) {
    return this.companyService.create(createCompanyDto);
  }

  @ApiOperation({ summary: "Kompaniya ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Kompaniya ID" })
  @ApiResponse({ status: 200, description: "Kompaniya yangilandi" })
  @ApiResponse({ status: 404, description: "Kompaniya topilmadi" })
  @UseGuards(ManagerOnlyGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCompanyDto: UpdateCompaniesDto
  ) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @ApiOperation({ summary: "Kompaniya ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Kompaniya ID" })
  @ApiResponse({ status: 200, description: "Kompaniya o'chirildi" })
  @ApiResponse({ status: 404, description: "Kompaniya topilmadi" })
  @UseGuards(ManagerOnlyGuard)
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.companyService.remove(+id);
  }
}
