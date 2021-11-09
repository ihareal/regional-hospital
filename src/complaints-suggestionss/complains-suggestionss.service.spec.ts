import { Test, TestingModule } from '@nestjs/testing';
import { ComplainsSuggestionssService } from './complains-suggestionss.service';

describe('ComplaintsSuggestionssService', () => {
  let service: ComplainsSuggestionssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplainsSuggestionssService],
    }).compile();

    service = module.get<ComplainsSuggestionssService>(ComplainsSuggestionssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
