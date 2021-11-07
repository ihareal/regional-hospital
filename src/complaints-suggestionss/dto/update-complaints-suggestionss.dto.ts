import { PartialType } from '@nestjs/swagger';
import { CreateComplaintsSuggestionssDto } from './create-complaints-suggestionss.dto';

export class UpdateComplaintsSuggestionssDto extends PartialType(CreateComplaintsSuggestionssDto) {}
