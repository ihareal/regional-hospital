import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplaintsSuggestionssService } from './complaints-suggestionss.service';
import { CreateComplaintsSuggestionssDto } from './dto/create-complaints-suggestionss.dto';
import { UpdateComplaintsSuggestionssDto } from './dto/update-complaints-suggestionss.dto';

@Controller('complaints-suggestionss')
export class ComplaintsSuggestionssController {
  constructor(private readonly complaintsSuggestionssService: ComplaintsSuggestionssService) {}

  @Post()
  create(@Body() createComplaintsSuggestionssDto: CreateComplaintsSuggestionssDto) {
    return this.complaintsSuggestionssService.create(createComplaintsSuggestionssDto);
  }

  @Get()
  findAll() {
    return this.complaintsSuggestionssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complaintsSuggestionssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplaintsSuggestionssDto: UpdateComplaintsSuggestionssDto) {
    return this.complaintsSuggestionssService.update(+id, updateComplaintsSuggestionssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintsSuggestionssService.remove(+id);
  }
}
