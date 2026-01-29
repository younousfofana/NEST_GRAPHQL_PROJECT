import { Faker } from "@faker-js/faker";
import { SubFamilies } from "src/entities/sub_families.entity";
import { setSeederFactory } from "typeorm-extension";

export const SubFamiliesFactory = setSeederFactory(SubFamilies, (faker:Faker)=>{

    const subFamilies = new SubFamilies();
    subFamilies.code = faker.string.alpha(3);
    subFamilies.libelle = faker.string.alpha(13);

    return subFamilies;

});