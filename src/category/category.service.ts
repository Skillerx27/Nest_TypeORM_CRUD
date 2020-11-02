import { Injectable } from '@nestjs/common';
import { proCategory } from './categorydata/procategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,TreeRepository } from 'typeorm';
import { getManager,EntityManager } from "typeorm";

@Injectable()
export class CategoryService {
    constructor( @InjectRepository(proCategory,'cats') private readonly categoryRepository: Repository<proCategory>,
      ) {}

    async findAll(): Promise<proCategory[]> {
        return this.categoryRepository.find();
      }

      findbyid(username: string): Promise<proCategory> {
        return this.categoryRepository.findOne(username);
      }

      async create(data: categoryInterface):Promise<proCategory> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        return await  this.categoryRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
      }

      async findAllChildren():Promise<proCategory[]>{
          const data= await this.categoryRepository.find();
          
        return ;
      }


}
