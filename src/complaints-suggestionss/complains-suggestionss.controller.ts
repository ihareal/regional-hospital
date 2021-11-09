import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ComplainsSuggestionssService } from './complains-suggestionss.service';
import { ComplainsSuggestions } from './entities/complains-suggestions.entity';

@Crud({
  model: {
    type: ComplainsSuggestions
  }
})

@ApiTags('Complains suggestions')
@Controller('complaints-suggestionss')
export class ComplainsSuggestionssController implements CrudController<ComplainsSuggestions>{
  constructor(public service: ComplainsSuggestionssService) {}
}
