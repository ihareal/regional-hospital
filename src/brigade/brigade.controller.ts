import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { BrigadeService } from './brigade.service';
import { Brigade } from './entities/brigade.entity';

@Crud({
  model: {
    type: Brigade
  },
  query:{ join: {
    brigadeMedicalPersonnels:{
      alias: 'brigadeMedicalPersonnels',
      eager: true,
      },
    }
  }
})

@ApiTags('Brigade')
@Controller('brigade')
export class BrigadeController implements CrudController<Brigade>{
  constructor(public service: BrigadeService) {}  
}
