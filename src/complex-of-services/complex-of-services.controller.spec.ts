import { Test, TestingModule } from '@nestjs/testing';
import { ComplexOfServicesController } from './complex-of-services.controller';
import { ComplexOfServicesService } from './complex-of-services.service';

describe('ComplexOfServicesController', () => {
  let controller: ComplexOfServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplexOfServicesController],
      providers: [ComplexOfServicesService],
    }).compile();

    controller = module.get<ComplexOfServicesController>(ComplexOfServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
