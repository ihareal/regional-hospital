import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplainsSuggestionsController } from './complains-suggestions.controller';
import { ComplainsSuggestionsService } from './complains-suggestions.service';
import { ComplainsSuggestions } from './entities/complains-suggestions.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ComplainsSuggestions])],
  controllers: [ComplainsSuggestionsController],
  providers: [ComplainsSuggestionsService]
})
export class ComplaintsSuggestionsModule {}
