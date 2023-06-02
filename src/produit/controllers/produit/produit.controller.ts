import { Body, Controller, Get, Post } from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'path';
import { CategoryService } from 'src/category/services/category/category.service';
import { CreateProduitDto } from 'src/produit/dtos/CreateProduitDto';
import { ProduitService } from 'src/produit/services/produit/produit.service';
import { Produit } from 'src/typeorm/entities/produit';

@Controller('produit')
export class ProduitController {
    constructor(private produitService:ProduitService,private categoryService:CategoryService){

    }
    @Post('add')
   async addProduit(@Body() createProduit:CreateProduitDto){
   
  
    
    
      
        
         
   return  await this.produitService.addProduit({...createProduit,createAt:new Date()})
   }

   @Get('all')
   async getProduit(){
  
     return this.produitService.getProduit()
         
 }
}
