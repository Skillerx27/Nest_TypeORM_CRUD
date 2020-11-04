import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { prodetails } from './productdata/prodetails.entity';

@Injectable()
export class ProductsService {

    constructor( @InjectRepository(prodetails,'ebhuvon') private readonly productRepository: Repository<prodetails>,
      ) {}


    async findAll(): Promise<prodetails[]> {
        return this.productRepository.find();
      }

      findbyid(username: string): Promise<prodetails> {
        return this.productRepository.findOne(username);
      }

      async create(data: prodetails):Promise<prodetails> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        return  this.productRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
      }
      
}
