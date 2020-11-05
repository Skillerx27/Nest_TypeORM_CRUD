import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { category } from './categorydata/procategory.entity';
import { Connection } from 'typeorm';
@Module({

    imports: [TypeOrmModule,TypeOrmModule.forFeature([category],'ebhubon')],
    controllers: [ CategoryController],
    providers: [ CategoryService],
    exports: [CategoryService,]




})
export class CategoryModule {
    
}
