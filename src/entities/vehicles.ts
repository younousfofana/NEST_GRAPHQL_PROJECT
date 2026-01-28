import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VehiclesEntity{

    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    immat : string

    @Column()
    type : string

    @Column()
    isSystem : boolean
}