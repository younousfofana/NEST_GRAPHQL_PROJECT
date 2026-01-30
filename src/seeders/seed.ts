import 'dotenv/config';
import dbconfig from "../config/dbconfig";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./main.seed";
import { ArticlesFactory } from "./factories/articles.factory";
import { ClientsFactory } from "./factories/clients.factory";
import { DriversFactory } from "./factories/drivers.factory";
import { FamiliesFactory } from "./factories/families.factory";
import { RepresentsFactory } from "./factories/represents.factory";
import { SubFamiliesFactory } from "./factories/sub_families.factory";
import { VehiclesFactory } from "./factories/vehicles.factory";

const options : DataSourceOptions & SeederOptions = {
    ...dbconfig(),
    factories: [ ArticlesFactory, ClientsFactory, DriversFactory, FamiliesFactory, RepresentsFactory, SubFamiliesFactory, VehiclesFactory],
    seeds: [MainSeeder]
}

const dataSource = new DataSource(options);
dataSource.initialize().then(async ()=>{
    await dataSource.synchronize(true);
    await runSeeders(dataSource);
    process.exit()
});

