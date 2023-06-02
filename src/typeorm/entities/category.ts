import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produit } from "./produit";
@Entity({name:'cateory'})
export class Category{
    @PrimaryGeneratedColumn()
    id:string
    @Column({unique:true})
    nom:string
    @OneToMany(type => Produit, produit => produit.id,{ cascade: true,})

     products: Produit[];
}