import { Module } from '@nestjs/common';
import { ArticlesResolver } from './articles.resolver';
import { ArticlesService } from './articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articles } from 'src/entities/articles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Articles
    ])
  ],
  providers: [
    ArticlesResolver, 
    ArticlesService
  ]
})
export class ArticlesModule {}
