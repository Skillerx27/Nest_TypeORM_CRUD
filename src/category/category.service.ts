import { Injectable } from '@nestjs/common';
import { category } from './categorydata/procategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,TreeRepository,getRepository, getMongoRepository ,ObjectID, createConnection, getConnectionManager} from 'typeorm';
import { Mongoose } from 'mongoose'
import { categoryInterface } from './categorydata/procategoryinter.interface';
import { sellers } from 'src/sellers/sellerdata/sellerdetails.entity';
import {getConnection} from "typeorm";
import { userInfo } from 'os';
import { LOADIPHLPAPI } from 'dns';

@Injectable()
export class CategoryService {
    constructor( @InjectRepository(category,'ebhubon') private readonly categoryRepository: Repository<category>,
      ) {}

      async delete(id: string) {
        await this.categoryRepository.delete(id);
      }



    //find all the roots
    async findAll(): Promise<any> {
        console.log("find all");
        let data=await this.categoryRepository.find()
        // console.log("ALL ROOT CATEGORIES==========",data)
        // console.log("TYPE OF THE OBJECT==========",typeof data)
        
      
        // for(let i=0; i<data.length; i++)
        // {
        //   data[i].parentId = null;
        //   //console.log("FIRST VALUE============", data[i].parentId);
        // }


        return data;
        const user = await getMongoRepository(category,'ebhubon')
        .createQueryBuilder("user")
        .where("user.id = :id", { id: null })
        .getOne();
        return user;
        //return this.categoryRepository.findOne({parentId: null});
      }



      //find the entire sub-tree 
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

      //find entire category tree
      async getallChild(): Promise<any> {
        let tree = []
        let subtree = []
        console.log("find all");

        let parent=await this.categoryRepository.find({
          where:{parentId:null},
        })
        
        console.log("PARENT============",parent)


        // function recursion() {
        // }

        for(let i=0; i<parent.length; i++)
        {
          parent[i].parentId = null;
          let child=await this.categoryRepository.find({
            where:{parentId:parent[i]._id},
          })    

          parent[i].children=child;
          
          if(child!=null)
          {
             for(let j=0; j<child.length; j++)
             { 
              let subchild=await this.categoryRepository.find({
                where:{parentId:child[j]._id},
              })
              child[j].children=subchild;

              if(subchild!=null)
              {
                 for(let k=0; k<subchild.length; k++)
                 { 
                  let subsubchild = await this.categoryRepository.find({
                    where:{parentId:subchild[k]._id},
                  })
                  subchild[k].children=subsubchild;
                 }
              }
             }
          }

          // subtree.concat(child)
          // console.log(child)
          // //console.log("FIRST VALUE============", data[i].parentId);
          // //for(let j=0; j)
        }


        return parent;


        // return subtree;

        // const user = await getMongoRepository(category,'ebhubon')
        // .createQueryBuilder("user")
        // .where("user.id = :id", { id: null })
        // .getOne();
        // return user;
        //return this.categoryRepository.findOne({parentId: null});
      }
      


      async createCategory(username: string, c_details: category): Promise<category> {
        console.log(username);
        let data= await this.categoryRepository.findOne({
          where:{title:username},
        })
       
        console.log("Data==============", data);
        
        let pID = data.parentId;

        console.log(pID);
        if(pID==null)
        {
          
          // var x = JSON.stringify(data)
          // console.log("JSON AS STRING===========",typeof x)
          // console.log("JSON AS STRING===========",x)
          // var x = JSON.parse(x)
          // console.log("JSON AS STRING===========",typeof x)
          // console.log("JSON AS STRING===========",Object(x.parentId))
          const categoryx = await  this.categoryRepository.save(c_details);
          return categoryx;
        }
        else
        {
          const categoryx = await  this.categoryRepository.save(c_details);
        }
        // const sub_category=await this.categoryRepository.find({
        //   where:{parentId:pID},
        // })

        console.log("SUB CATEGORYS=============",c_details);
        return c_details;
        //await this.categoryRepository.delete(name);

        return this.categoryRepository.findOne(username);
      }

      async findbyroot(): Promise<category> {
        console.log("FINDROOT FUNCTION========")
        
        //console.log(user);
        // const user = await getRepository(proCategory)
        // .createQueryBuilder()
        // .select("pro_category")
        // .from(proCategory, "pro_category")
        // .where("pro_category.id = :id", { parentId: null })
        
       return ;
      }
    

      async create(data: category):Promise<category> {
        //const user = this.usersRepository.create(data);
        // console.log("clalled mysql add method called")
        console.log(data)
        
        console.log('parent id=============: ',data.parentId);
        
        console.log('parent id type=============: ',typeof (data.parentId));
        console.log('parent category=================',data.parentCategory);
        
        if(data.parentId){
          // var pCategory= await this.categoryRepository.findOne(data.parentId);
          // console.log("PARENT DATA==================",pCategory);
         

          let user = new category();
          user.parentId=data.parentId;
          user.slug=data.slug;
          user.status=data.status;
          user.title=data.title;
          // var x = JSON.stringify(data)
          // console.log("JSON AS STRING===========",typeof x)
          // console.log("JSON AS STRING===========",x)
          // var x = JSON.parse(x)
          // console.log("JSON AS STRING===========",typeof x)
          // console.log("JSON AS STRING===========",Object(x.parentId))


          const categoryx = await  this.categoryRepository.save(user);
         // data.parentCategory=pCategory;
          // delete data.parentId;
          return categoryx;

        }
        
        
        data.parentId = null
        const new_category = await  this.categoryRepository.save(data);


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
        return new_category;


      }

      async createcategory(data: categoryInterface):Promise<any> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        console.log(data.parentCategories)


        if(data.parentCategories!=undefined){
        let lastidx = data.parentCategories[data.parentCategories.length-1]
        console.log("LAST IDX VALUE==========", lastidx);

        let datavalue= await this.categoryRepository.findOne({
          where:{title:lastidx},})



          if(datavalue.parentId){
            // var pCategory= await this.categoryRepository.findOne(data.parentId);
            // console.log("PARENT DATA==================",pCategory);
           
  
            let user = new category();
            user.parentId = datavalue.parentId;
            user.slug = datavalue.slug;
            user.status = datavalue.status;
            user.title = data.title;
            user.order = datavalue.order;
            
            
            // var x = JSON.stringify(data)
            // console.log("JSON AS STRING===========",typeof x)
            // console.log("JSON AS STRING===========",x)
            // var x = JSON.parse(x)
            // console.log("JSON AS STRING===========",typeof x)
            // console.log("JSON AS STRING===========",Object(x.parentId))
  
  
            const categoryx = await  this.categoryRepository.save(user);
           // data.parentCategory=pCategory;
            // delete data.parentId;
            return categoryx;
  
          }
          
        }
          
          data.parentId = null
          const new_category = await  this.categoryRepository.save(data);
        return data;
       
      }

      
      async showSubCategory(): Promise<any> {
        console.log("creating categories ");
        let parent=await this.categoryRepository.find({
          where:{parentId:null},
        })
        
        console.log("PARENT============",parent)


        // function recursion() {
        // }

        for(let i=0; i<parent.length; i++)
        {
          parent[i].parentId = null;
          let child=await this.categoryRepository.find({
            where:{parentId:parent[i]._id},
          })    

          parent[i].children=child;
          
          if(child!=null)
          {
             for(let j=0; j<child.length; j++)
             { 
              let subchild=await this.categoryRepository.find({
                where:{parentId:child[j]._id},
              })
              child[j].children=subchild;
             }
          }

          // subtree.concat(child)
          // console.log(child)
          // //console.log("FIRST VALUE============", data[i].parentId);
          // //for(let j=0; j)
        }
        return parent;
        // return subtree;
        // const user = await getMongoRepository(category,'ebhubon')
        // .createQueryBuilder("user")
        // .where("user.id = :id", { id: null })
        // .getOne();
        // return user;
        //return this.categoryRepository.findOne({parentId: null});
      }

}
