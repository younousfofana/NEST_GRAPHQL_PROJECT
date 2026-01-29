import { Faker, faker } from "@faker-js/faker";
import { Articles } from "src/entities/articles.entity";
import { setSeederFactory } from "typeorm-extension";

export const ArticleFactory = setSeederFactory(Articles, (faker: Faker)=>{

    const articles = new Articles();
    
    articles.libelle = faker.commerce.product();
    articles.groupe = faker.string.alpha({length: {max: 4, min: 1}});
    articles.fournisseur = faker.person.firstName('male');
    articles.codeBarre = faker.string.numeric(13);
    articles.coefficient = faker.number.float();
    articles.depot = faker.string.alpha(2);
    articles.prixAchat = faker.number.int({min: 1, max: 5000});
    articles.prixClient = faker.number.float();
    articles.prixVente = faker.number.float();
    articles.conditionnement = faker.string.alpha(10);
    articles.categorieTarif = faker.string.alpha(3);
    articles.remiseClient = faker.number.float();
    articles.sFamille = faker.string.alpha(6);
    articles.suiviStock = faker.datatype.boolean();
    articles.sommeil = faker.datatype.boolean();
    articles.uniteVente = faker.string.alpha(1);

    return articles;
})