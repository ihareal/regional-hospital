import { Module } from '@nestjs/common';
import { BrigadeService } from './brigade.service';
import { BrigadeController } from './brigade.controller';
import { Brigade } from './entities/brigade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Brigade])],
  controllers: [BrigadeController],
  providers: [BrigadeService]
})
export class BrigadeModule {}
