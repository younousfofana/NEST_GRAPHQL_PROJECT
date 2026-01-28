import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubFamilies } from "./sub_families.entity";

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

    @ManyToMany(()=>SubFamilies)
    @JoinTable()
    subFamilies : SubFamilies[]
}