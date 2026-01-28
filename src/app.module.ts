import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import dbconfig from './config/dbconfig';
import dbconfigproduction from './config/dbconfigproduction';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal:  true, // Le module ConfigModule est disponible partout dans l’application, automatiquement.
      expandVariables: true, // Permet d’utiliser des variables dans d’autres variables dans ton .env
      load: [dbconfig, dbconfigproduction]
    }),

    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV == "production" ? dbconfigproduction : dbconfig 
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      debug: true,
      playground: true
    }),

    ArticlesModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
