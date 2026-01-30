import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articles } from "./articles.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { SubFamilies } from "./sub_families.entity";

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

    @Field(()=>[SubFamilies])
    @ManyToMany(()=>SubFamilies)
    @JoinTable()
    subFamilies : SubFamilies[]
}