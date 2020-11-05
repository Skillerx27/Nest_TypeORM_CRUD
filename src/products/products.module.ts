import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { category } from 'src/category/categorydata/procategory.entity';
import { products } from './productdata/prodetails.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [TypeOrmModule,TypeOrmModule.forFeature([products],'ebhubon'),TypeOrmModule.forFeature([category],'ebhubon')],
    controllers: [ ProductsController],
    providers: [ ProductsService],
    exports: [ProductsService,]



})
export class ProductsModule {}
