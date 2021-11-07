import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArrivalsService } from './arrivals.service';
import { CreateArrivalDto } from './dto/create-arrival.dto';
import { UpdateArrivalDto } from './dto/update-arrival.dto';

@Controller('arrivals')
export class ArrivalsController {
  constructor(private readonly arrivalsService: ArrivalsService) {}

  @Post()
  create(@Body() createArrivalDto: CreateArrivalDto) {
    return this.arrivalsService.create(createArrivalDto);
  }

  @Get()
  findAll() {
    return this.arrivalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arrivalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArrivalDto: UpdateArrivalDto) {
    return this.arrivalsService.update(+id, updateArrivalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arrivalsService.remove(+id);
  }
}
