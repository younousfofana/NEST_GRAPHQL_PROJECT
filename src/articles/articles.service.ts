import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Articles } from 'src/entities/articles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {

    constructor(@InjectRepository(Articles) private readonly articlesRepo : Repository<Articles>){}

    public async findAll() : Promise<Articles[]>{
        return await this.articlesRepo.find();
    }
}
