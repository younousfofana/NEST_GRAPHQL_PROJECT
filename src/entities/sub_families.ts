import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SubFamiliesEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    code : string 

    @Column()
    libelle : string
}