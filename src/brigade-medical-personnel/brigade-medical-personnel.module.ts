import { Module } from '@nestjs/common';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { BrigadeMedicalPersonnelController } from './brigade-medical-personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrigadeMedicalPersonnel } from './entities/brigade-medical-personnel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BrigadeMedicalPersonnel])],
  controllers: [BrigadeMedicalPersonnelController],
  providers: [BrigadeMedicalPersonnelService]
})
export class BrigadeMedicalPersonnelModule {}
