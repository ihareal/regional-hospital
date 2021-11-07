import { Injectable } from '@nestjs/common';
import { CreateRegisterOfCardDto } from './dto/create-register-of-card.dto';
import { UpdateRegisterOfCardDto } from './dto/update-register-of-card.dto';

@Injectable()
export class RegisterOfCardsService {
  create(createRegisterOfCardDto: CreateRegisterOfCardDto) {
    return 'This action adds a new registerOfCard';
  }

  findAll() {
    return `This action returns all registerOfCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerOfCard`;
  }

  update(id: number, updateRegisterOfCardDto: UpdateRegisterOfCardDto) {
    return `This action updates a #${id} registerOfCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerOfCard`;
  }
}
