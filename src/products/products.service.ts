import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { products } from './productdata/prodetails.entity';

@Injectable()
export class ProductsService {

    constructor( @InjectRepository(products,'ebhubon') private readonly productRepository: Repository<products>,
      ) {}


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
        return  this.productRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
      }
      
}
