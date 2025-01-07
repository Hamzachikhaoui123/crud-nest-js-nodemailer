import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/services/category/category.service';
import { Category } from 'src/typeorm/entities/category';
import { Produit } from 'src/typeorm/entities/produit';
import { Repository } from 'typeorm';
import { CreateProduitParams } from './../../../utils/type'

@Injectable()
export class ProduitService {
    constructor(@InjectRepository(Produit) private produitRepository: Repository<Produit>,
        @InjectRepository(Category) private category: Repository<Category>,
        private categoryService: CategoryService

    ) {

    }

    async addProduit(produitNew: CreateProduitParams): Promise<Produit | undefined> {

        const newProduit = this.produitRepository.create(produitNew)
        console.log(newProduit);
        return this.produitRepository.save(newProduit)
          
    }

    getProduit() {
        return this.produitRepository.find()
    }


}
