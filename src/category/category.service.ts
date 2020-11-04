import { Injectable } from '@nestjs/common';
import { proCategory } from './categorydata/procategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,TreeRepository,getRepository ,ObjectID} from 'typeorm';
import { Mongoose } from 'mongoose'
import { categoryInterface } from './categorydata/procategoryinter.interface';
import { SellerInfo } from 'src/sellers/sellerdata/sellerdetails.entity';

@Injectable()
export class CategoryService {
    constructor( @InjectRepository(proCategory,'ebhuvon') private readonly categoryRepository: Repository<proCategory>,
      ) {}

    async findAll(): Promise<proCategory[]> {
        return this.categoryRepository.find();
      }

      findbyid(username: string): Promise<proCategory> {
        return this.categoryRepository.findOne(username);
      }

      async findbyroot(): Promise<proCategory> {
        console.log("FINDROOT FUNCTION========")
        const user = await getRepository(proCategory)
        .createQueryBuilder("user")
        .where("user.parentId: = :id", { id: null})
        .getMany();
        console.log(user);
        // const user = await getRepository(proCategory)
        // .createQueryBuilder()
        // .select("pro_category")
        // .from(proCategory, "pro_category")
        // .where("pro_category.id = :id", { parentId: null })
        
        return;
      
      }

      async create(data: proCategory):Promise<proCategory> {
        //const user = this.usersRepository.create(data);
        // console.log("clalled mysql add method called")
        console.log(data)
        
        console.log('parent id=============: ',data.parentId);
        
        console.log('parent id type=============: ',typeof (data.parentId));
        console.log('parent category=================',data.parentCategory);
        
        if(data.parentId){
          var pCategory= await this.categoryRepository.findOne(data.parentId);
          console.log("PARENT DATA==================",pCategory);
         

          const user = new proCategory();
          user.parentId=pCategory._id;
          user.slug=data.slug;
          user.status=data.status;
          user.title=data.title;
          // var x = JSON.stringify(data)
          // console.log("JSON AS STRING===========",typeof x)
          // console.log("JSON AS STRING===========",x)
          // var x = JSON.parse(x)
          // console.log("JSON AS STRING===========",typeof x)
          // console.log("JSON AS STRING===========",Object(x.parentId))



          const category = await  this.categoryRepository.save(user);
         // data.parentCategory=pCategory;
          // delete data.parentId;
          return category;

        }
        
        


        
        
        const category = await  this.categoryRepository.save(data);


        // console.log("CATEGORY CREATED =========",category)
        
        // if( pCategory &&  data.parentId){
        //   console.log("CONFIRM HAVING ")
        //   if(!pCategory.childCategories || !pCategory.childCategories.length){
        //     pCategory.childCategories=[];
        //   }
        //    //pCategory.childCategories.push(category);
          
        //   console.log('pcategory id: ',pCategory._id);
        //   await this.categoryRepository.update(pCategory._id,pCategory)
        // }
        
        ///return await this.categoryRepository.findOne(pCategory._id);
        return category;


      }

      
      

}
