import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { BrigadeMedicalPersonnel } from './entities/brigade-medical-personnel.entity';

@Crud({
  model: {
    type: BrigadeMedicalPersonnel
  }
})

@ApiTags('Brigade of medical personnel')
@Controller('brigade-medical-personnel')
export class BrigadeMedicalPersonnelController implements CrudController<BrigadeMedicalPersonnel>{
  constructor(public service: BrigadeMedicalPersonnelService) {}
}
