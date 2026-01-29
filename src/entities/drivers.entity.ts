import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubFamilies } from "./sub_families.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class drivers{
    
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

    @Field(()=>[SubFamilies])
    @ManyToMany(()=>SubFamilies)
    @JoinTable()
    subFamilies : SubFamilies[]
}