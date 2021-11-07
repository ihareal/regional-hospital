import { Module } from '@nestjs/common';
import { ComplexOfServicesService } from './complex-of-services.service';
import { ComplexOfServicesController } from './complex-of-services.controller';

@Module({
  controllers: [ComplexOfServicesController],
  providers: [ComplexOfServicesService]
})
export class ComplexOfServicesModule {}
