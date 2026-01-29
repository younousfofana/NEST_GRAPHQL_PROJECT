import { Faker } from "@faker-js/faker";
import { Drivers } from "src/entities/drivers.entity";
import { setSeederFactory } from "typeorm-extension";

export const DriversFactory = setSeederFactory(Drivers, (faker: Faker)=>{

    const drivers = new Drivers();

    drivers.nom = faker.person.firstName();
    drivers.matricule = faker.string.alphanumeric();
    drivers.isSystem = faker.datatype.boolean();
    
    return drivers
})