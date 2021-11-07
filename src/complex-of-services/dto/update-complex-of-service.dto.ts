import { PartialType } from '@nestjs/swagger';
import { CreateComplexOfServiceDto } from './create-complex-of-service.dto';

export class UpdateComplexOfServiceDto extends PartialType(CreateComplexOfServiceDto) {}
