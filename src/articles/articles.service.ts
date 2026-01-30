import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Articles } from 'src/entities/articles.entity';
import { Families } from 'src/entities/families.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {

    constructor(@InjectRepository(Articles) private readonly articlesRepo : Repository<Articles>){}

    public async findAll() : Promise<Articles[]>{
        // relations: ['famille'] dans la methode find Permet d'eviter les erreurs lorsque pour un article donne on voudrais 
        // recuperer dans la requete la famille a laquelle il est rattache l autre solution serait d utiliser le lazy loading 
        // dans le resolver 
        return await this.articlesRepo.find({
            relations: ['famille']
        });
    }
}
