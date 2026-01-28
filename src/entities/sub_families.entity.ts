import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SubFamilies{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    code : string 

    @Column()
    libelle : string
}