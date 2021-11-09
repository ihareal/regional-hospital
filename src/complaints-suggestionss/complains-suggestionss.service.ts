import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ComplainsSuggestions } from './entities/complains-suggestions.entity';

@Injectable()
export class ComplainsSuggestionssService extends TypeOrmCrudService<ComplainsSuggestions> {
  constructor(@InjectRepository(ComplainsSuggestions) repo){
    super(repo)
  }
}
