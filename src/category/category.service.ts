import { Injectable } from '@nestjs/common';
import { proCategory } from './categorydata/procategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,TreeRepository,getRepository, getMongoRepository ,ObjectID, createConnection, getConnectionManager} from 'typeorm';
import { Mongoose } from 'mongoose'
import { categoryInterface } from './categorydata/procategoryinter.interface';
import { SellerInfo } from 'src/sellers/sellerdata/sellerdetails.entity';
import {getConnection} from "typeorm";
import { userInfo } from 'os';

@Injectable()
export class CategoryService {
    constructor( @InjectRepository(proCategory,'ebhuvon') private readonly categoryRepository: Repository<proCategory>,
      ) {}

    async findAll(): Promise<any> {
        console.log("find all");
        const data=await this.categoryRepository.find({
          where:{parentId:null},
        })
        return data;
        const user = await getMongoRepository(proCategory,'ebhuvon')
        .createQueryBuilder("user")
        .where("user.id = :id", { id: null })
        .getOne();
        return user;
        //return this.categoryRepository.findOne({parentId: null});
      }

      async getChild(username: string): Promise<any>  {
        console.log(username);
        let data= await this.categoryRepository.findOne({
          where:{title:username},
        })
       
        console.log("Data==============", data);
        
        let pID = data._id;
        console.log(pID);

        const sub_category=await this.categoryRepository.find({
          where:{parentId:pID},
        })

        console.log("SUB CATEGORYS=============",sub_category);


        return sub_category;
        //await this.categoryRepository.delete(name);

        
      }


      findbyid(username: string): Promise<proCategory> {
        return this.categoryRepository.findOne(username);
      }

      async findbyroot(): Promise<proCategory> {
        console.log("FINDROOT FUNCTION========")
        
        //console.log(user);
        // const user = await getRepository(proCategory)
        // .createQueryBuilder()
        // .select("pro_category")
        // .from(proCategory, "pro_category")
        // .where("pro_category.id = :id", { parentId: null })
        
       return ;
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
        
        


        
        data.parentId = null
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
