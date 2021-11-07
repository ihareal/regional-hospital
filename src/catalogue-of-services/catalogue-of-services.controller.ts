import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogueOfServicesService } from './catalogue-of-services.service';
import { CreateCatalogueOfServiceDto } from './dto/create-catalogue-of-service.dto';
import { UpdateCatalogueOfServiceDto } from './dto/update-catalogue-of-service.dto';

@Controller('catalogue-of-services')
export class CatalogueOfServicesController {
  constructor(private readonly catalogueOfServicesService: CatalogueOfServicesService) {}

  @Post()
  create(@Body() createCatalogueOfServiceDto: CreateCatalogueOfServiceDto) {
    return this.catalogueOfServicesService.create(createCatalogueOfServiceDto);
  }

  @Get()
  findAll() {
    return this.catalogueOfServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogueOfServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogueOfServiceDto: UpdateCatalogueOfServiceDto) {
    return this.catalogueOfServicesService.update(+id, updateCatalogueOfServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogueOfServicesService.remove(+id);
  }
}
