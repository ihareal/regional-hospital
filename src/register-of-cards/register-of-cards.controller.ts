import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterOfCardsService } from './register-of-cards.service';
import { CreateRegisterOfCardDto } from './dto/create-register-of-card.dto';
import { UpdateRegisterOfCardDto } from './dto/update-register-of-card.dto';

@Controller('register-of-cards')
export class RegisterOfCardsController {
  constructor(private readonly registerOfCardsService: RegisterOfCardsService) {}

  @Post()
  create(@Body() createRegisterOfCardDto: CreateRegisterOfCardDto) {
    return this.registerOfCardsService.create(createRegisterOfCardDto);
  }

  @Get()
  findAll() {
    return this.registerOfCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerOfCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterOfCardDto: UpdateRegisterOfCardDto) {
    return this.registerOfCardsService.update(+id, updateRegisterOfCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerOfCardsService.remove(+id);
  }
}
