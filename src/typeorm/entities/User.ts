import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity({name:'users'})
export class User{
@PrimaryGeneratedColumn({type:'bigint'})
id:number;
@Column()
username:string
@Column({unique:true})
email:string
@Column()
password:string
@Column()
createdAt:Date;
@Column({nullable:true})
authStrategy:string;
@OneToOne(()=>Profile)
@JoinColumn()
profile:Profile;
}