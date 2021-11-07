import { Test, TestingModule } from '@nestjs/testing';
import { RegisterOfCardsController } from './register-of-cards.controller';
import { RegisterOfCardsService } from './register-of-cards.service';

describe('RegisterOfCardsController', () => {
  let controller: RegisterOfCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterOfCardsController],
      providers: [RegisterOfCardsService],
    }).compile();

    controller = module.get<RegisterOfCardsController>(RegisterOfCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
