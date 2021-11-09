import { Module } from '@nestjs/common';
import { RegisterOfCardsService } from './register-of-cards.service';
import { RegisterOfCardsController } from './register-of-cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterOfCards } from './entities/register-of-cards.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RegisterOfCards])],
  controllers: [RegisterOfCardsController],
  providers: [RegisterOfCardsService]
})
export class RegisterOfCardsModule {}
