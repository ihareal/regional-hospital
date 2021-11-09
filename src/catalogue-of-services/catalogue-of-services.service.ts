import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CatalogueOfServices } from './entities/сatalogue-of-services.entity';

@Injectable()
export class CatalogueOfServicesService extends TypeOrmCrudService<CatalogueOfServices> {
  constructor(@InjectRepository(CatalogueOfServices) repo) {
    super(repo)
  }
}
