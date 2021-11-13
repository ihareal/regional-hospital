import { Test, TestingModule } from '@nestjs/testing';
import { ComplainsSuggestionsController } from './complains-suggestions.controller';
import { ComplainsSuggestionsService } from './complains-suggestions.service';

describe('ComplainsSuggestionssController', () => {
  let controller: ComplainsSuggestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplainsSuggestionsController],
      providers: [ComplainsSuggestionsService],
    }).compile();

    controller = module.get<ComplainsSuggestionsController>(ComplainsSuggestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
