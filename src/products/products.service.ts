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

        let allProducts = await this.productRepository.find();
        //allProducts.proCategory;
        console.log(allProducts);
        return allProducts; 
      }

      findbyid(username: string): Promise<products> {
        return this.productRepository.findOne(username);
      }

      async delete(id: string) {
        await this.productRepository.delete(id);
      }

      async create(data: products):Promise<products> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        console.log(data.category)

        let lastidx = data.category[data.category.length-1]
        console.log("LAST IDX VALUE==========", lastidx);

        let datavalue= await this.categoryRepository.findOne({
          where:{title:lastidx}})
console.log('category:',datavalue);

        // data.categoryId = datavalue._id;
        data.category.push(datavalue)
        return  this.productRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
      }
      
}
