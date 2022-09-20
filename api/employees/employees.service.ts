import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    console.log(createEmployeeDto);
    const result = await this.prisma.employees.create({
      data: createEmployeeDto,
    });
    // console.log(result);
    // console.log(createEmployeeDto);
    return 'This action adds a new employee';
  }

  findAll() {
    return this.prisma.employees.findMany();
  }

  findOne(id: number) {
    return this.prisma.employees.findUnique({ where: { id: id } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
