import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { category } from 'src/category/categorydata/procategory.entity';
import { Repository } from 'typeorm';
import { products } from './productdata/prodetails.entity';

@Injectable()
export class ProductsService {

    constructor( 
    @InjectRepository(products,'ebhubon') private readonly productRepository: Repository<products>,
    @InjectRepository(category,'ebhubon') private readonly categoryRepository: Repository<category>) {}


    async findAll(): Promise<products[]> {
        return this.productRepository.find();
      }

      findbyid(username: string): Promise<products> {
        return this.productRepository.findOne(username);
      }

      async create(data: products):Promise<products> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        console.log(data.category)

        let lastidx = data.category[data.category.length-1]
        console.log("LAST IDX VALUE==========", lastidx);

        let datavalue= await this.categoryRepository.findOne({
          where:{title:lastidx},})
        data.categoryId = datavalue._id;
        return  this.productRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
      }
      
}
