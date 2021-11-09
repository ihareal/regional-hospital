import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplainsSuggestionssController } from './complains-suggestionss.controller';
import { ComplainsSuggestionssService } from './complains-suggestionss.service';
import { ComplainsSuggestions } from './entities/complains-suggestions.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ComplainsSuggestions])],
  controllers: [ComplainsSuggestionssController],
  providers: [ComplainsSuggestionssService]
})
export class ComplaintsSuggestionssModule {}
