import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { UpdateBranchesDto } from './dto/update-branch.dto';


@Injectable()
export class BranchService {
  constructor(private readonly prismaService: PrismaService){}
  async create(createBranchDto: CreateBranchesDto) {
    // Company mavjudligini tekshirish
    const company = await this.prismaService.companies.findUnique({
      where: { id: createBranchDto.company_id }
    });
    
    if (!company) {
      throw new BadRequestException('Kompaniya topilmadi');
    }

    return await this.prismaService.branches.create({
      data: createBranchDto
    });
  }

  async findAll() {
    return await this.prismaService.branches.findMany({
      include: { company: true }
    });
  }

  async findOne(id: number) {
    const branch = await this.prismaService.branches.findUnique({
      where: { id },
      include: { company: true }
    });
    
    if (!branch) {
      throw new NotFoundException('Branch topilmadi');
    }
    
    return branch;
  }

  async update(id: number, updateBranchDto: UpdateBranchesDto) {
    // Branch mavjudligini tekshirish
    const existingBranch = await this.prismaService.branches.findUnique({
      where: { id }
    });
    
    if (!existingBranch) {
      throw new NotFoundException('Branch topilmadi');
    }

    if (updateBranchDto.company_id) {
      const company = await this.prismaService.companies.findUnique({
        where: { id: updateBranchDto.company_id }
      });
      
      if (!company) {
        throw new BadRequestException('Kompaniya topilmadi');
      }
    }

    return await this.prismaService.branches.update({
      where: { id }, 
      data: updateBranchDto
    });
  }

    async remove(id: number) {
    // Branch mavjudligini tekshirish
    const existingBranch = await this.prismaService.branches.findUnique({
      where: { id }
    });
    
    if (!existingBranch) {
      throw new NotFoundException('Branch topilmadi');
    }

    // Avval avtomobillarni o'chirish
    await this.prismaService.car.deleteMany({
      where: { branch_id: id }
    });

    // Keyin branch'ni o'chirish
    return await this.prismaService.branches.delete({
      where: { id }
    });
  }
}
