import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintsSuggestionssController } from './complaints-suggestionss.controller';
import { ComplaintsSuggestionssService } from './complaints-suggestionss.service';

describe('ComplaintsSuggestionssController', () => {
  let controller: ComplaintsSuggestionssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplaintsSuggestionssController],
      providers: [ComplaintsSuggestionssService],
    }).compile();

    controller = module.get<ComplaintsSuggestionssController>(ComplaintsSuggestionssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
