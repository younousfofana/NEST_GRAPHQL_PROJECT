import { Faker } from "@faker-js/faker";
import { Clients } from "src/entities/clients.entity";
import { setSeederFactory } from "typeorm-extension";

export const ClientFactory = setSeederFactory(Clients, (faker: Faker)=>{

    const clients = new Clients();

    clients.code = faker.string.numeric(7);
    clients.adresse = faker.location.streetAddress();
    clients.categorie = faker.string.alpha(3);
    clients.cc = faker.string.alphanumeric(5);
    clients.libelle = faker.company.name();
    clients.telephone = faker.phone.number();
    clients.compteGeneral = faker.string.alpha(2);
    clients.magasin = faker.string.alpha(2);
    clients.regCondition = faker.string.alpha();
    clients.plafond = faker.number.int({min: 1000, max: 100000});
    clients.libelleCategorie = faker.string.alpha(3);

    return clients;
})