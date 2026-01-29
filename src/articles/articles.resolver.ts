import { Query, Resolver } from '@nestjs/graphql';
import { Articles } from 'src/entities/articles.entity';
import { ArticlesService } from './articles.service';

@Resolver(()=> Articles)
export class ArticlesResolver {

    constructor(private articlesService : ArticlesService){}

    @Query(() => [Articles], {name:'articles'})
    async findAll(){
        return this.articlesService.findAll();
    }
}
