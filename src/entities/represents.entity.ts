import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Clients } from "./clients.entity";

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

    @Field(()=>[Clients])
    @OneToMany(()=>Clients, (client)=>client.representant)
    client : Clients
}