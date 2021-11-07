import { Test, TestingModule } from '@nestjs/testing';
import { BrigadeMedicalPersonnelController } from './brigade-medical-personnel.controller';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';

describe('BrigadeMedicalPersonnelController', () => {
  let controller: BrigadeMedicalPersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrigadeMedicalPersonnelController],
      providers: [BrigadeMedicalPersonnelService],
    }).compile();

    controller = module.get<BrigadeMedicalPersonnelController>(BrigadeMedicalPersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
