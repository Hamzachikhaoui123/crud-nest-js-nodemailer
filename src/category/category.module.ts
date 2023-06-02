import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/category';
import { CategoryController } from './controllers/category/category.controller';
import { CategoryService } from './services/category/category.service';

@Module({
  imports:[TypeOrmModule.forFeature([Category])],

  controllers: [CategoryController],
  providers: [CategoryService],
  exports:[CategoryService]
})
export class CategoryModule {}
