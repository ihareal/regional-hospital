import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { CreateMedicalPersonnelDto } from './dto/create-medical-personnel.dto';
import { UpdateMedicalPersonnelDto } from './dto/update-medical-personnel.dto';

@Controller('medical-personnel')
export class MedicalPersonnelController {
  constructor(private readonly medicalPersonnelService: MedicalPersonnelService) {}

  @Post()
  create(@Body() createMedicalPersonnelDto: CreateMedicalPersonnelDto) {
    return this.medicalPersonnelService.create(createMedicalPersonnelDto);
  }

  @Get()
  findAll() {
    return this.medicalPersonnelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalPersonnelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalPersonnelDto: UpdateMedicalPersonnelDto) {
    return this.medicalPersonnelService.update(+id, updateMedicalPersonnelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalPersonnelService.remove(+id);
  }
}
