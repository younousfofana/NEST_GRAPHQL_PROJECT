import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class VehiclesEntity{

    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id : number
    
    @Field(()=>String)
    @Column()
    immat : string

    @Field(()=>String)
    @Column()
    type : string

    @Field(()=>Boolean)
    @Column()
    isSystem : boolean
}