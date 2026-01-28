import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Families } from "./families.entity";

@Entity()
export class Articles{
    
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    libelle : string

    @Column()
    groupe : string

    @OneToOne(
        ()=>Families, 
        (famille)=> famille.articles,
        {
            nullable: false,
            onDelete: 'RESTRICT'
        }
     )
    famille : Families

    @Column()
    sFamille : string

    @Column()
    fournisseur : string

    @Column()
    codeBarre : string

    @Column()
    suiviStock : boolean

    @Column()
    conditionnement : string

    @Column()
    prixAchat : number

    @Column()
    coefficient : number

    @Column()
    prixVente : number

    @Column()
    uniteVente : string

    @Column()
    categorieTarif : string

    @Column()
    depot : string

    @Column()
    prixClient : number

    @Column()
    remiseClient : number

    @Column()
    sommeil : boolean
}