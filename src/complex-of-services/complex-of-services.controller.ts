import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplexOfServicesService } from './complex-of-services.service';
import { CreateComplexOfServiceDto } from './dto/create-complex-of-service.dto';
import { UpdateComplexOfServiceDto } from './dto/update-complex-of-service.dto';

@Controller('complex-of-services')
export class ComplexOfServicesController {
  constructor(private readonly complexOfServicesService: ComplexOfServicesService) {}

  @Post()
  create(@Body() createComplexOfServiceDto: CreateComplexOfServiceDto) {
    return this.complexOfServicesService.create(createComplexOfServiceDto);
  }

  @Get()
  findAll() {
    return this.complexOfServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complexOfServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplexOfServiceDto: UpdateComplexOfServiceDto) {
    return this.complexOfServicesService.update(+id, updateComplexOfServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complexOfServicesService.remove(+id);
  }
}
