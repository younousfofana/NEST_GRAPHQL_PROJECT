import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubFamiliesEntity } from "./sub_families";

@Entity()
export class drivers{
    
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nom : string

    @Column()
    matricule : string

    @Column()
    isSystem : boolean

    @ManyToMany(()=>SubFamiliesEntity)
    @JoinTable()
    subFamilies : SubFamiliesEntity[]
}