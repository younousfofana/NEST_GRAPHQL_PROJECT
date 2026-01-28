import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articles } from "./articles.entity";

@Entity()
export class Families{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    code : string

    @Column()
    libelle : string

    @OneToMany(
        ()=>Articles, 
        article => article.famille
    )
    articles : Articles[]
}