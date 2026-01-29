import { Families } from "src/entities/families.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { FamiliesFactory } from "./factories/families.factory";
import { Represents } from "src/entities/represents.entity";
import { SubFamilies } from "src/entities/sub_families.entity";
import { Drivers } from "src/entities/drivers.entity";

export class MainSeeder implements Seeder{

  public async run(datasource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {

    const familiesFactory = factoryManager.get(Families);
    const families = await familiesFactory.saveMany(30);

    console.log(`✔ ${families.length} Families created`);

    const representsFactory = factoryManager.get(Represents);
    const represents = await representsFactory.saveMany(30);

    console.log(`✔ ${represents.length} Represents created`);

    const subFamiliesFactory = factoryManager.get(SubFamilies);
    const subFamilies = await subFamiliesFactory.saveMany(30);

    console.log(`${subFamilies.length} Sub Families created`);

    const driversFactory = factoryManager.get(Drivers);
    const drivers = await driversFactory.saveMany(30);

    console.log(`${drivers.length} Drivers created`)


    
  }
}