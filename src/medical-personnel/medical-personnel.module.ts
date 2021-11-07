import { Module } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { MedicalPersonnelController } from './medical-personnel.controller';

@Module({
  controllers: [MedicalPersonnelController],
  providers: [MedicalPersonnelService]
})
export class MedicalPersonnelModule {}
