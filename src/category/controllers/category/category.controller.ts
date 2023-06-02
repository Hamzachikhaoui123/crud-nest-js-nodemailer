import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { HttpCode, Param } from '@nestjs/common/decorators';
import { CategoryService } from 'src/category/services/category/category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService:CategoryService){

    }
    @Get()
    getCategory(){
        return this.categoryService.getCategory()

    }
    @Get("one/:id")
    getCategoryById(@Param('id',ParseIntPipe)id:string){
        return this.categoryService.getCateogryById(id)
    }
}
