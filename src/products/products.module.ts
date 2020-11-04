import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { prodetails } from './productdata/prodetails.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [TypeOrmModule,TypeOrmModule.forFeature([prodetails],'ebhuvon')],
    controllers: [ ProductsController],
    providers: [ ProductsService],
    exports: [ProductsService,]



})
export class ProductsModule {}
