import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { CreateBrigadeMedicalPersonnelDto } from './dto/create-brigade-medical-personnel.dto';
import { UpdateBrigadeMedicalPersonnelDto } from './dto/update-brigade-medical-personnel.dto';

@Controller('brigade-medical-personnel')
export class BrigadeMedicalPersonnelController {
  constructor(private readonly brigadeMedicalPersonnelService: BrigadeMedicalPersonnelService) {}

  @Post()
  create(@Body() createBrigadeMedicalPersonnelDto: CreateBrigadeMedicalPersonnelDto) {
    return this.brigadeMedicalPersonnelService.create(createBrigadeMedicalPersonnelDto);
  }

  @Get()
  findAll() {
    return this.brigadeMedicalPersonnelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brigadeMedicalPersonnelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrigadeMedicalPersonnelDto: UpdateBrigadeMedicalPersonnelDto) {
    return this.brigadeMedicalPersonnelService.update(+id, updateBrigadeMedicalPersonnelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brigadeMedicalPersonnelService.remove(+id);
  }
}
