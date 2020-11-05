import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { products } from './productdata/prodetails.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [TypeOrmModule,TypeOrmModule.forFeature([products],'ebhubon')],
    controllers: [ ProductsController],
    providers: [ ProductsService],
    exports: [ProductsService,]



})
export class ProductsModule {}
