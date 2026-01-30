import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Drivers{
    
    @Field(()=> Int)
    @PrimaryGeneratedColumn()
    id : number

    @Field(()=>String)
    @Column()
    nom : string

    @Field()
    @Column()
    matricule : string

    @Field(()=>Boolean)
    @Column()
    isSystem : boolean
}