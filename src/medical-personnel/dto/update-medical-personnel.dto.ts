import { PartialType } from '@nestjs/swagger';
import { CreateMedicalPersonnelDto } from './create-medical-personnel.dto';

export class UpdateMedicalPersonnelDto extends PartialType(CreateMedicalPersonnelDto) {}
