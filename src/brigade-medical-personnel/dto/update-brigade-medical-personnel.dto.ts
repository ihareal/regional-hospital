import { PartialType } from '@nestjs/swagger';
import { CreateBrigadeMedicalPersonnelDto } from './create-brigade-medical-personnel.dto';

export class UpdateBrigadeMedicalPersonnelDto extends PartialType(CreateBrigadeMedicalPersonnelDto) {}
