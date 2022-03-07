import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(search: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [ 
          {name: search} , 
          {id: (parseInt(search) || 0)} 
        ] 
      },
      include: {
        authored: true,
        dept: {
          include: {
            comp: true,
          }
        },
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
