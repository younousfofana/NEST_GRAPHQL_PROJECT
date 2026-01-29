import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Families } from "./families.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Articles{
    
    @Field(()=> Int)
    @PrimaryGeneratedColumn()
    id : number

    @Field() // Pas besoin de specifier le type pour les cbaines de caracteres  
    @Column()
    libelle : string

    @Field()
    @Column()
    groupe : string

    @Field(()=>Families)
    @OneToOne(
        ()=>Families, 
        (famille)=> famille.articles,
        {
            nullable: false,
            onDelete: 'RESTRICT'
        }
     )
    famille : Families

    @Field()
    @Column()
    sFamille : string

    @Field()
    @Column()
    fournisseur : string
    
    @Field()
    @Column()
    codeBarre : string

    @Field(()=>Boolean)
    @Column()
    suiviStock : boolean
    
    @Field()
    @Column()
    conditionnement : string
    
    @Field(()=>Int)
    @Column()
    prixAchat : number

    @Field(()=>Int)
    @Column()
    coefficient : number
    
    @Field(()=>Int)
    @Column()
    prixVente : number
    
    @Field()
    @Column()
    uniteVente : string
    
    @Field()
    @Column()
    categorieTarif : string

    @Field()
    @Column()
    depot : string

    @Field(()=>Int)
    @Column()
    prixClient : number
    
    @Field(()=>Int)
    @Column()
    remiseClient : number

    @Field(()=>Boolean)
    @Column()
    sommeil : boolean
}