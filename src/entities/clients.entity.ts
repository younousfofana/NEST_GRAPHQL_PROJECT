import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Field(()=>String)
    @Column()
    representant : string 

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