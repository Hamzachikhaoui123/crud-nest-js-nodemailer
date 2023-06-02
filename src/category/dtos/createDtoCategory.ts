import { Produit } from "src/typeorm/entities/produit";

export class CreateProduitDto{
    id:string;
    nom:string;
    produit:Produit[]
}