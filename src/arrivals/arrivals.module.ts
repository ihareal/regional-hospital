import { Module } from '@nestjs/common';
import { ArrivalsService } from './arrivals.service';
import { ArrivalsController } from './arrivals.controller';
import { Arrivals } from './entities/arrivals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Arrivals])],
  controllers: [ArrivalsController],
  providers: [ArrivalsService]
})
export class ArrivalsModule {}
