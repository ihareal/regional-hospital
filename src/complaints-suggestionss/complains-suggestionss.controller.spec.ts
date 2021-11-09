import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintsSuggestionssController } from './complains-suggestionss.controller';
import { ComplainsSuggestionssService } from './complains-suggestionss.service';

describe('ComplainsSuggestionssController', () => {
  let controller: ComplaintsSuggestionssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplaintsSuggestionssController],
      providers: [ComplainsSuggestionssService],
    }).compile();

    controller = module.get<ComplaintsSuggestionssController>(ComplainsSuggestionssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
