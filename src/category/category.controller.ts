import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe,Request } from '@nestjs/common';
import { CategoryService } from './category.service';
import { category } from './categorydata/procategory.entity';
import { categoryInterface } from './categorydata/procategoryinter.interface';
import { ObjectID } from 'typeorm'
import { sellers } from 'src/sellers/sellerdata/sellerdetails.entity';
import { categoryvalidator } from './categorydata/validator.category';
import { InjectRepository } from '@nestjs/typeorm';
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}



    @Get('all')
    find(): Promise<categoryInterface> {
        return this.categoryService.findAll();
    }


    @Get('allchild')
    getallChild(): Promise<categoryInterface> {
        return this.categoryService.getallChild();
    }



    @Get('specific')
    findspecific(@Param() params): Promise<category> {
        return this.categoryService.findbyid(params.id);
    }

    
    @Get('get/:id')
    getChild(@Param() params ): Promise<prodetailsInterface>  {
        return this.categoryService.getChild(params.id);
    }


    @Post('create')
    @UsePipes(new ValidationPipe())
    create(@Body() user: category ):Promise<category> {
        console.log("clalled mysql post")
        return this.categoryService.create(user);
    }

    @Get('root')
    findbyroot(): Promise<category> {
        return this.categoryService.findbyroot();
    }


}
