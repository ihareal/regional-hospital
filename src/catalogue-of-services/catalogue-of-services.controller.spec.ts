import { Test, TestingModule } from '@nestjs/testing';
import { CatalogueOfServicesController } from './catalogue-of-services.controller';
import { CatalogueOfServicesService } from './catalogue-of-services.service';

describe('CatalogueOfServicesController', () => {
  let controller: CatalogueOfServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogueOfServicesController],
      providers: [CatalogueOfServicesService],
    }).compile();

    controller = module.get<CatalogueOfServicesController>(CatalogueOfServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
