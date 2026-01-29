import { Faker } from "@faker-js/faker";
import { Represents } from "src/entities/represents.entity";
import { setSeederFactory } from "typeorm-extension";

export const RepresentsFactory = setSeederFactory(Represents, (faker:Faker)=>{
    
    const represents = new Represents();

    represents.code = faker.string.alphanumeric(4);
    represents.libelle = faker.person.firstName();

    return represents;
})