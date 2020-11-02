import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { prodetails } from './productdata/prodetails.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}


    @Get('all')
    find(): Promise<prodetails[]> {
        return this.productService.findAll();
    }

    @Get('specific/:id')
    findspecific(@Param() params): Promise<prodetails> {
        return this.productService.findbyid(params.id);
    }


    @Post('create')
    create(@Body() user: prodetails):Promise<any> {
        console.log("clalled mysql post")
        return this.productService.create(user);
    }









}
