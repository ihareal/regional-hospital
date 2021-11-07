import { Injectable } from '@nestjs/common';
import { CreateMedicalPersonnelDto } from './dto/create-medical-personnel.dto';
import { UpdateMedicalPersonnelDto } from './dto/update-medical-personnel.dto';

@Injectable()
export class MedicalPersonnelService {
  create(createMedicalPersonnelDto: CreateMedicalPersonnelDto) {
    return 'This action adds a new medicalPersonnel';
  }

  findAll() {
    return `This action returns all medicalPersonnel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalPersonnel`;
  }

  update(id: number, updateMedicalPersonnelDto: UpdateMedicalPersonnelDto) {
    return `This action updates a #${id} medicalPersonnel`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalPersonnel`;
  }
}
