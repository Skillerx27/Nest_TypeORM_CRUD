import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { products } from './productdata/prodetails.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}


    @Get('all')
    find(): Promise<products[]> {
        return this.productService.findAll();
    }

    @Get('specific/:id')
    findspecific(@Param() params): Promise<products> {
        return this.productService.findbyid(params.id);
    }


    @Post('create')
    create(@Body() user: products):Promise<any> {
        console.log("clalled mysql post")
        return this.productService.create(user);
    }









}
