import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { proCategory } from './categorydata/procategory.entity';
import { categoryInterface } from './categorydata/procategoryinter.interface';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}



    @Get('all')
    find(): Promise<proCategory[]> {
        return this.categoryService.findAll();
    }

    @Get('specific/:id')
    findspecific(@Param() params): Promise<proCategory> {
        return this.categoryService.findbyid(params.id);
    }


    @Post('create')
    create(@Body() user: categoryInterface) {
        console.log("clalled mysql post")
        return this.categoryService.create(user);
    }

    @Get('getchild')
   findChildren():Promise<proCategory[]>{
        const children = this.categoryService.findAllChildren();
        return children;
    }


}
