import { PartialType } from '@nestjs/swagger';
import { CreateRegisterOfCardDto } from './create-register-of-card.dto';

export class UpdateRegisterOfCardDto extends PartialType(CreateRegisterOfCardDto) {}
