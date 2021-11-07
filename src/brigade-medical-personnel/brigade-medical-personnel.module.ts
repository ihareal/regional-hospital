import { Module } from '@nestjs/common';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { BrigadeMedicalPersonnelController } from './brigade-medical-personnel.controller';

@Module({
  controllers: [BrigadeMedicalPersonnelController],
  providers: [BrigadeMedicalPersonnelService]
})
export class BrigadeMedicalPersonnelModule {}
