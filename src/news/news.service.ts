import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService extends TypeOrmCrudService<News>{
  constructor(@InjectRepository(News) repo) {
    super(repo)
  }
}
