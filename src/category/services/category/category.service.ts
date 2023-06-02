import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private CategoryRepository:Repository<Category>,
    ){

    }
    getCategory(){
        return this.CategoryRepository.find()
    }

    getCateogryById(id:any):Promise<Category | undefined>{
        const category=this.CategoryRepository.findOneBy({id})
        // category.then((elm:Category)=>console.log("name",elm.nom)
        
        
        return category
    }
}
