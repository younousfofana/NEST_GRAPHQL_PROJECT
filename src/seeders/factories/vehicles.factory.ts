import { Faker } from "@faker-js/faker";
import { Vehicles } from "src/entities/vehicles";
import { setSeederFactory } from "typeorm-extension";

export const VehiclesFactory = setSeederFactory(Vehicles, (faker:Faker)=>{

    const vehicles = new Vehicles();

    vehicles.immat = faker.vehicle.vin();
    vehicles.type = faker.vehicle.type();
    vehicles.isSystem = faker.datatype.boolean();

    return vehicles;
});