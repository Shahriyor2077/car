import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CreateCompaniesDto } from "./dto/create-company.dto";
import { UpdateCompaniesDto } from "./dto/update-company.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCompanyDto: CreateCompaniesDto) {
    return this.prismaService.companies.create({ data: createCompanyDto });
  }

  async findAll() {
    try {
      const companies = await this.prismaService.companies.findMany();
      return companies;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    const company = await this.prismaService.companies.findUnique({
      where: { id },
      include: { branches: true },
    });

    if (!company) {
      throw new NotFoundException("Kompaniya topilmadi");
    }

    return company;
  }

  update(id: number, updateCompanyDto: UpdateCompaniesDto) {
    return this.prismaService.companies.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  async remove(id: number) {
    const company = await this.prismaService.companies.findUnique({
      where: { id },
    });

    if (!company) {
      throw new NotFoundException("Kompaniya topilmadi");
    }
    await this.prismaService.car_images.deleteMany({
      where: { car: { branch: { company_id: id } } },
    });
    await this.prismaService.car_maintenance.deleteMany({
      where: { car: { branch: { company_id: id } } },
    });
    await this.prismaService.car_feature.deleteMany({
      where: { car: { branch: { company_id: id } } },
    });
    await this.prismaService.reviews.deleteMany({
      where: { car: { branch: { company_id: id } } },
    });
    await this.prismaService.rentals.deleteMany({
      where: { car: { branch: { company_id: id } } },
    });
    await this.prismaService.car.deleteMany({
      where: { branch: { company_id: id } },
    });
    await this.prismaService.branches.deleteMany({
      where: { company_id: id },
    });
    await this.prismaService.companies.delete({
      where: { id },
    });

    return {
      message: "Kompaniya o'chirildi",
      success: true,
    };
  }
}
