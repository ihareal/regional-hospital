import { Test, TestingModule } from '@nestjs/testing';
import { MedicalPersonnelController } from './medical-personnel.controller';
import { MedicalPersonnelService } from './medical-personnel.service';

describe('MedicalPersonnelController', () => {
  let controller: MedicalPersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalPersonnelController],
      providers: [MedicalPersonnelService],
    }).compile();

    controller = module.get<MedicalPersonnelController>(MedicalPersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
