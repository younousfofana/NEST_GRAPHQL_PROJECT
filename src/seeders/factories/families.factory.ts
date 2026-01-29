import { Faker } from "@faker-js/faker";
import { Families } from "src/entities/families.entity";
import { setSeederFactory } from "typeorm-extension";

export const FamiliesFactory = setSeederFactory(Families, (faker:Faker)=>{

    const families = new Families();
    families.libelle = faker.string.alpha();
    families.code = faker.string.alpha({length:{min:4, max:4}});

    return families;
})