import { Module } from '@nestjs/common';
import { ComplaintsSuggestionssService } from './complaints-suggestionss.service';
import { ComplaintsSuggestionssController } from './complaints-suggestionss.controller';

@Module({
  controllers: [ComplaintsSuggestionssController],
  providers: [ComplaintsSuggestionssService]
})
export class ComplaintsSuggestionssModule {}
