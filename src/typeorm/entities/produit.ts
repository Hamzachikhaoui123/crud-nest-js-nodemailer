import { Strategy } from "passport-jwt";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@Entity({name:'produits'})
export class Produit{
@PrimaryGeneratedColumn()
    id:string
@Column()
nom:string;
@Column()
description:string
@ManyToOne(type => Category, cateorgy => cateorgy.products)
  @JoinColumn({name: 'category-id'})
cateorgyId:string;



@Column()
createAt: Date 
}