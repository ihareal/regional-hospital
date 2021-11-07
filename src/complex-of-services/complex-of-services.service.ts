import { Injectable } from '@nestjs/common';
import { CreateComplexOfServiceDto } from './dto/create-complex-of-service.dto';
import { UpdateComplexOfServiceDto } from './dto/update-complex-of-service.dto';

@Injectable()
export class ComplexOfServicesService {
  create(createComplexOfServiceDto: CreateComplexOfServiceDto) {
    return 'This action adds a new complexOfService';
  }

  findAll() {
    return `This action returns all complexOfServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complexOfService`;
  }

  update(id: number, updateComplexOfServiceDto: UpdateComplexOfServiceDto) {
    return `This action updates a #${id} complexOfService`;
  }

  remove(id: number) {
    return `This action removes a #${id} complexOfService`;
  }
}
