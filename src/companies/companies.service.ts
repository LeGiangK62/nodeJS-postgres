import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService){}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({ data: createCompanyDto });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(search: string) {
    return this.prisma.company.findFirst({
      where: {
        OR: [ 
          {name: search} , 
          {id: (parseInt(search) || 0)} 
        ] 
      },
    });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(search: string) {
    return this.prisma.company.deleteMany({
      where: {
        OR: [ 
          {name: search} , 
          {id: (parseInt(search) || 0)} 
        ] 
      },
    });
  }
}
