import { Module } from '@nestjs/common';
import { CatalogueOfServicesService } from './catalogue-of-services.service';
import { CatalogueOfServicesController } from './catalogue-of-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogueOfServices } from './entities/сatalogue-of-services.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CatalogueOfServices])],
  controllers: [CatalogueOfServicesController],
  providers: [CatalogueOfServicesService]
})
export class CatalogueOfServicesModule {}
