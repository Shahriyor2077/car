import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/common/guards/jwt-auth.guard";
import { RoleGuard } from "../auth/common/guards/role.guard";
import { Roles } from "../auth/common/decorators/roles.decorator";
import { BranchService } from "./branch.service";
import { UpdateBranchesDto } from "./dto/update-branch.dto";
import { CreateBranchesDto } from "./dto/create-branch.dto";

@ApiTags("Branch - Filiallar")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RoleGuard)
@Controller("branch")
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @ApiOperation({ summary: "Filial yaratish" })
  @ApiResponse({ status: 201, description: "Filial muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @Roles("MANAGER")
  @Post()
  create(@Body() createBranchDto: CreateBranchesDto) {
    return this.branchService.create(createBranchDto);
  }

  @ApiOperation({ summary: "Barcha filiallar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Filiallar ro'yxati" })
  @Get()
  findAll() {
    return this.branchService.findAll();
  }

  @ApiOperation({ summary: "Filial ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Filial ID" })
  @ApiResponse({ status: 200, description: "Filial ma'lumoti" })
  @ApiResponse({ status: 404, description: "Filial topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.branchService.findOne(+id);
  }

  @ApiOperation({ summary: "Filial ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Filial ID" })
  @ApiResponse({ status: 200, description: "Filial yangilandi" })
  @ApiResponse({ status: 404, description: "Filial topilmadi" })
  @Roles("MANAGER")
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBranchDto: UpdateBranchesDto) {
    return this.branchService.update(+id, updateBranchDto);
  }

  @ApiOperation({ summary: "Filial ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Filial ID" })
  @ApiResponse({ status: 200, description: "Filial o'chirildi" })
  @ApiResponse({ status: 404, description: "Filial topilmadi" })
  @Roles("MANAGER")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.branchService.remove(+id);
  }
}
