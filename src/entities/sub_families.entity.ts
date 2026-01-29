import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class SubFamilies{

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