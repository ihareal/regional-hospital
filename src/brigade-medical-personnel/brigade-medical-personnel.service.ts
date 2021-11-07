import { Injectable } from '@nestjs/common';
import { CreateBrigadeMedicalPersonnelDto } from './dto/create-brigade-medical-personnel.dto';
import { UpdateBrigadeMedicalPersonnelDto } from './dto/update-brigade-medical-personnel.dto';

@Injectable()
export class BrigadeMedicalPersonnelService {
  create(createBrigadeMedicalPersonnelDto: CreateBrigadeMedicalPersonnelDto) {
    return 'This action adds a new brigadeMedicalPersonnel';
  }

  findAll() {
    return `This action returns all brigadeMedicalPersonnel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brigadeMedicalPersonnel`;
  }

  update(id: number, updateBrigadeMedicalPersonnelDto: UpdateBrigadeMedicalPersonnelDto) {
    return `This action updates a #${id} brigadeMedicalPersonnel`;
  }

  remove(id: number) {
    return `This action removes a #${id} brigadeMedicalPersonnel`;
  }
}
