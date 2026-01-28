import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RepresentsEntity{

    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    code : string

    @Column()
    libelle : string
}