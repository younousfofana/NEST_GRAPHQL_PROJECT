import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientsEntity{

    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    code : string

    @Column()
    libelle : string

    @Column()
    categorie : string

    @Column()
    representant : string 

    @Column()
    magasin : string

    @Column()
    compteGeneral : string

    @Column()
    plafond : number

    @Column()
    regCondition : string

    @Column()
    telephone : string

    @Column()
    cc : string
    
    @Column()
    adresse : string

    @Column()
    libelleCategorie : string
}