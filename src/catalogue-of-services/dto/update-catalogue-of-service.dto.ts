import { PartialType } from '@nestjs/swagger';
import { CreateCatalogueOfServiceDto } from './create-catalogue-of-service.dto';

export class UpdateCatalogueOfServiceDto extends PartialType(CreateCatalogueOfServiceDto) {}
