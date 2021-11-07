import { Module } from '@nestjs/common';
import { CatalogueOfServicesService } from './catalogue-of-services.service';
import { CatalogueOfServicesController } from './catalogue-of-services.controller';

@Module({
  controllers: [CatalogueOfServicesController],
  providers: [CatalogueOfServicesService]
})
export class CatalogueOfServicesModule {}
