import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticlesEntity } from "./articles";

@Entity()
export class FamiliesEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    code : string

    @Column()
    libelle : string

    @OneToMany(
        ()=>ArticlesEntity, 
        article => article.famille
    )
    articles : ArticlesEntity[]
}