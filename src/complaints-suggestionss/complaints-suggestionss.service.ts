import { Injectable } from '@nestjs/common';
import { CreateComplaintsSuggestionssDto } from './dto/create-complaints-suggestionss.dto';
import { UpdateComplaintsSuggestionssDto } from './dto/update-complaints-suggestionss.dto';

@Injectable()
export class ComplaintsSuggestionssService {
  create(createComplaintsSuggestionssDto: CreateComplaintsSuggestionssDto) {
    return 'This action adds a new complaintsSuggestionss';
  }

  findAll() {
    return `This action returns all complaintsSuggestionss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complaintsSuggestionss`;
  }

  update(id: number, updateComplaintsSuggestionssDto: UpdateComplaintsSuggestionssDto) {
    return `This action updates a #${id} complaintsSuggestionss`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaintsSuggestionss`;
  }
}
