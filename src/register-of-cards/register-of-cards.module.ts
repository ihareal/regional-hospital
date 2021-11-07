import { Module } from '@nestjs/common';
import { RegisterOfCardsService } from './register-of-cards.service';
import { RegisterOfCardsController } from './register-of-cards.controller';

@Module({
  controllers: [RegisterOfCardsController],
  providers: [RegisterOfCardsService]
})
export class RegisterOfCardsModule {}
