import { Injectable } from '@nestjs/common';
import { proCategory } from './categorydata/procategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,TreeRepository } from 'typeorm';
import { getManager,EntityManager } from "typeorm";
import { categoryInterface } from './categorydata/procategoryinter.interface';

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
        // console.log("clalled mysql add method called")
        console.log(data)
        console.log('parent id=============: ',data.parentId);
        console.log('parent category=================',data.parentCategory);
         //finding root category
        if(data.parentId){
          var pCategory= await this.categoryRepository.findOne(data.parentId);
          console.log("PARENT DATA==================",pCategory);
          data.parentCategory=pCategory;
          // delete data.parentId;
        }
        
        const category = await  this.categoryRepository.save(data);
        console.log("CATEGORY CREATED =========",category)
        
        if( pCategory &&  data.parentId){
          console.log("CONFIRM HAVING pCATEGORY and GIVEN PARENTID")
          if(!pCategory.childCategories || !pCategory.childCategories.length){
            console.log("CONFIRMING BOTH HAVE SOME VALUE")
            pCategory.childCategories=[];
          }
           pCategory.childCategories.push(category);
          
          console.log('pcategory id:===============',pCategory._id);
          //await this.categoryRepository.update(pCategory._id,pCategory)
          await this.categoryRepository.update(category.parentCategory._id,pCategory)
        }
        
        ///return await this.categoryRepository.findOne(pCategory._id);
        return category;


        // await this.usersmRepository.save(data);
        // return user;
        //return user;
      }

      async findAllChildren():Promise<proCategory[]>{
          const data= await this.categoryRepository.find();
          
        return ;
      }


}
