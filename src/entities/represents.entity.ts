import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Represents{

    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id : number
    
    @Field()
    @Column()
    code : string

    @Field()
    @Column()
    libelle : string
}