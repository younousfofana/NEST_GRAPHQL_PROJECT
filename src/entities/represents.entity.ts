import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToOne(()=>Clients, (client)=>client.representant)
    @Field(()=>Clients)
    client : Clients
}