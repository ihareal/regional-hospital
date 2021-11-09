import { Module } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { MedicalPersonnelController } from './medical-personnel.controller';
import { MedicalPersonnel } from './entities/medical-personnel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalPersonnel])],
  controllers: [MedicalPersonnelController],
  providers: [MedicalPersonnelService]
})
export class MedicalPersonnelModule {}
