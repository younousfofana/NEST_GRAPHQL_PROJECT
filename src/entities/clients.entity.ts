import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Represents } from "./represents.entity";

@ObjectType()
@Entity()
export class Clients{

    
    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id : number
    
    @Field(()=>String)
    @Column()
    code : string

    @Field(()=>String)
    @Column()
    libelle : string

    @Field(()=>String)
    @Column()
    categorie : string

    @Field(()=>Represents)
    @OneToOne(()=>Represents, representant=> representant.client, { nullable: false})
    @JoinColumn()
    representant : Represents 

    @Field(()=>String)
    @Column()
    magasin : string

    @Field(()=>String)
    @Column()
    compteGeneral : string

    @Field(()=>Int)
    @Column()
    plafond : number

    @Field(()=>String)
    @Column()
    regCondition : string

    @Field(()=>String)
    @Column()
    telephone : string

    @Field(()=>String)
    @Column()
    cc : string
    
    @Field(()=>String)
    @Column()
    adresse : string

    @Field(()=>String)
    @Column()
    libelleCategorie : string
}