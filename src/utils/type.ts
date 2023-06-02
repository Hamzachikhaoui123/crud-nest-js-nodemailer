import { Category } from "src/typeorm/entities/category";

export type UserParams={
    username:string;
    email:string;
    password:string
}
export type UpdateUserParams={
    username:string;
    email:string;
    password:string
}
export type CreateProfileParams={
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    dob:string
}

export type CreateProduitParams={
   
    nom:string;
    description:string;
    cateorgyId:string;
    createAt:Date;

}

export type CreateCategoryParams={
    id:string;
    nom:string
}