import { Families } from "../entities/families.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Represents } from "../entities/represents.entity";
import { SubFamilies } from "../entities/sub_families.entity";
import { Drivers } from "../entities/drivers.entity";
import { Clients } from "../entities/clients.entity";
import { Articles } from "../entities/articles.entity";
import { faker } from "@faker-js/faker";

export class MainSeeder implements Seeder{

  public async run(datasource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {

    const representsFactory = factoryManager.get(Represents);
    const represents = await representsFactory.saveMany(30);

    console.log(`✔ ${represents.length} Represents created`);

    const subFamiliesFactory = factoryManager.get(SubFamilies);
    const subFamilies = await subFamiliesFactory.saveMany(30);

    console.log(`✔ ${subFamilies.length} Sub Families created`);

    const driversFactory = factoryManager.get(Drivers);
    const drivers = await driversFactory.saveMany(30);

    console.log(`✔ ${drivers.length} Drivers created`)

    const clientsRepo = datasource.getRepository(Clients);

    const clients = await clientsRepo.save(
      Array.from({ length: 30 }).map(() => ({
        code : faker.string.numeric(7),
        adresse : faker.location.streetAddress(),
        categorie : faker.string.alpha(3),
        cc : faker.string.alphanumeric(5),
        libelle : faker.company.name(),
        telephone : faker.phone.number(),
        compteGeneral : faker.string.alpha(2),
        magasin : faker.string.alpha(2),
        regCondition : faker.string.alpha(),
        plafond : faker.number.int({min: 1000, max: 100000}),
        libelleCategorie : faker.string.alpha(3),
        representant: faker.helpers.arrayElement(represents),
      }))
    );

    console.log(`✔ ${length} Clients created`);

    const familiesRepo = datasource.getRepository(Families);

    const families = await familiesRepo.save(
      Array.from({ length: 30 }).map(() => ({
        libelle: faker.string.alpha(),
        code: faker.string.alpha({ length: 4 }),
        subFamilies: faker.helpers.arrayElements(
          subFamilies,
          faker.number.int({ min: 1, max: 3 })
        ),
      }))
    );

    console.log(`✔ ${families.length} Families created`);

    const articlesRepo = datasource.getRepository(Articles);

    const articles = await articlesRepo.save(
      Array.from({ length: 50 }).map(() => ({
        libelle : faker.commerce.product(),
        groupe : faker.string.alpha({length: {max: 4, min: 1}}),
        fournisseur : faker.person.firstName('male'),
        codeBarre : faker.string.numeric(13),
        coefficient : faker.number.float(),
        depot : faker.string.alpha(2),
        prixAchat : faker.number.int({min: 1, max: 5000}),
        prixClient : faker.number.float(),
        prixVente : faker.number.float(),
        conditionnement : faker.string.alpha(10),
        categorieTarif : faker.string.alpha(3),
        remiseClient : faker.number.float(),
        sFamille : faker.string.alpha(6),
        suiviStock : faker.datatype.boolean(),
        sommeil : faker.datatype.boolean(),
        uniteVente : faker.string.alpha(1),
        famille: faker.helpers.arrayElement(families),
      }))
    );
    
    console.log(`✔ ${articles.length} Articles created`);

  }
}