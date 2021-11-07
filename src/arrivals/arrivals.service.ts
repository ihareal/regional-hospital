import { Injectable } from '@nestjs/common';
import { CreateArrivalDto } from './dto/create-arrival.dto';
import { UpdateArrivalDto } from './dto/update-arrival.dto';

@Injectable()
export class ArrivalsService {
  create(createArrivalDto: CreateArrivalDto) {
    return 'This action adds a new arrival';
  }

  findAll() {
    return `This action returns all arrivals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arrival`;
  }

  update(id: number, updateArrivalDto: UpdateArrivalDto) {
    return `This action updates a #${id} arrival`;
  }

  remove(id: number) {
    return `This action removes a #${id} arrival`;
  }
}
