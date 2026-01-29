import { Query, Resolver } from '@nestjs/graphql';
import { Articles } from 'src/entities/articles.entity';

@Resolver(()=> Articles)
export class ArticlesResolver {

    @Query(() => Articles, {name:'articles'})
    async findAll(){
        return [] as Articles[];
    }
}
