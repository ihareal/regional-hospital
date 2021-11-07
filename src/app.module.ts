import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ArrivalsModule } from './arrivals/arrivals.module';
import { BrigadeMedicalPersonnelModule } from './brigade-medical-personnel/brigade-medical-personnel.module';
import { BrigadeModule } from './brigade/brigade.module';
import { ComplexOfServicesModule } from './complex-of-services/complex-of-services.module';
import { CatalogueOfServicesModule } from './catalogue-of-services/catalogue-of-services.module';
import { CardsModule } from './cards/cards.module';
import { ComplaintsSuggestionssModule } from './complaints-suggestionss/complaints-suggestionss.module';
import { DepartmentsModule } from './departments/departments.module';
import { MedicalPersonnelModule } from './medical-personnel/medical-personnel.module';
import { PatientsModule } from './patients/patients.module';
import { RegisterOfCardsModule } from './register-of-cards/register-of-cards.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArrivalsModule, BrigadeMedicalPersonnelModule, BrigadeModule, ComplexOfServicesModule, CatalogueOfServicesModule, CardsModule, ComplaintsSuggestionssModule, DepartmentsModule, MedicalPersonnelModule, PatientsModule, RegisterOfCardsModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
