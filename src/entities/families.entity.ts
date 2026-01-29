import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articles } from "./articles.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Families{

    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id : number

    @Field(()=>String)
    @Column()
    code : string

    @Field(()=>String)
    @Column()
    libelle : string

    @Field(()=>[Articles])
    @OneToMany(
        ()=>Articles, 
        article => article.famille
    )
    articles : Articles[]
}