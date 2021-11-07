import { Injectable } from '@nestjs/common';
import { CreateCatalogueOfServiceDto } from './dto/create-catalogue-of-service.dto';
import { UpdateCatalogueOfServiceDto } from './dto/update-catalogue-of-service.dto';

@Injectable()
export class CatalogueOfServicesService {
  create(createCatalogueOfServiceDto: CreateCatalogueOfServiceDto) {
    return 'This action adds a new catalogueOfService';
  }

  findAll() {
    return `This action returns all catalogueOfServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogueOfService`;
  }

  update(id: number, updateCatalogueOfServiceDto: UpdateCatalogueOfServiceDto) {
    return `This action updates a #${id} catalogueOfService`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogueOfService`;
  }
}
