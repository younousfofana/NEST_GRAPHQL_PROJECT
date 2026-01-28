import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Represents{

    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    code : string

    @Column()
    libelle : string
}