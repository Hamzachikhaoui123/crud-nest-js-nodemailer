import { Module } from '@nestjs/common';
import { ProduitService } from './services/produit/produit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from 'src/typeorm/entities/produit';
import { ProduitController } from './controllers/produit/produit.controller';
import { CategoryService } from 'src/category/services/category/category.service';
import { CategoryModule } from 'src/category/category.module';
import { Category } from 'src/typeorm/entities/category';


@Module({
  imports:[TypeOrmModule.forFeature([Produit,Category]),CategoryModule],
  providers: [ProduitService],
  controllers: [ProduitController]
})
export class ProduitModule {}
