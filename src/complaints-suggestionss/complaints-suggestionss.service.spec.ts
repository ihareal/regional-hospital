import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintsSuggestionssService } from './complaints-suggestionss.service';

describe('ComplaintsSuggestionssService', () => {
  let service: ComplaintsSuggestionssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplaintsSuggestionssService],
    }).compile();

    service = module.get<ComplaintsSuggestionssService>(ComplaintsSuggestionssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
