import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { sellerUser } from 'src/common/Entity/user_seller.entity';

import { users } from 'src/users/userdata/userdetails.entity';
import { ObjectID, Repository } from 'typeorm';
import { sellers } from './sellerdata/sellerdetails.entity';
import { SellerInfoInter } from './sellerdata/sellerinter.interface'
// import mongoose from 'mongoose';
import {ObjectId,ObjectID as ObjID} from 'mongodb'

@Injectable()
export class SellersService {

    constructor(
        @InjectRepository(sellers,'ebhubon') private readonly sellerinfoRepository: Repository<sellers>,
        @InjectRepository(sellerUser,'ebhubon') private readonly sellerUserRepository: Repository<sellerUser>,
        @InjectRepository(users,'ebhubon') private readonly userInfoRepository: Repository<users>){}

        async authDecode( user: any) {
        console.log(user)
        console.log("ID==================",user._id)
        let sl = new sellerUser()
        let { user_id,seller_id,createdAt,createdBy,updatedAt,updatedBy, ...result } = sl;
        result = user._id
        console.log("xxxxxxxxxxxxxxxxx",result)
        let new_user = await this.sellerUserRepository.findOne({user_id:new ObjID(user._id)})

        console.log("useruseruseruser", new_user);
        
        // // let x = user._id
        // console.log("FINDING Seller USER ID===========", new_user._id)
        // console.log("FINDING USER ID===========", new_user.user_id)
        // console.log("FINDING Seller ID===========", new_user.seller_id)
        // let seller= await this.sellerinfoRepository.findOne({
        //     where:{_id:new_user.seller_id}})

        // console.log("sellersellersellersellerseller", seller)
        // // let seller = this.sellerUserRepository.findOne((new_user.seller_id))
        return new_user;
        // return this.sellerUserRepository.findOne({
        //     where:{user_id:x}});
        // return await this.sellerUserRepository.findOne({
        //     where:{seller_id:x},
        //   })
        }

        async delete(id: string) {
            await this.sellerinfoRepository.delete(id);
          }

        async personDetails(_id: string) {
            console.log("ID====================",_id);
            return await this.sellerinfoRepository.findOne(_id)
            //return this.sellerinfoRepository.update({_id}, data);
          }


        async permission(_id: ObjectID,data: sellers) {
            console.log("ID====================",_id);
            await this.sellerinfoRepository.update({_id}, data); 
            return await this.sellerinfoRepository.findOne(_id)
            //return this.sellerinfoRepository.update({_id}, data);
          }

        async find(username: string): Promise<users> {
            const name = await this.userInfoRepository.findOne({username:username});
            
            if(name!=null)
            {
                console.log("HERE1111111111111111")
                console.log(name)
                return await this.userInfoRepository.findOne({username:username});
            }
            const email = await this.userInfoRepository.findOne({mail:username});
            if(email!=null)
            {
                console.log("HERE2222222222222")
                console.log(name)
                return await this.userInfoRepository.findOne({mail:username});
            }

            
            
        }


        // async update (id: number,data: SellerInfoInter) {
        // await this.sellerinfoRepository.update({_id}, data)
        //         return await this.sellerinfoRepository.findOne(id)
        // }

       
  
        async findAll(): Promise<any> {
            console.log('find all')
            let data = await this.sellerinfoRepository.find() 
            return data;
        }

        async create(data: SellerInfoInter):Promise<sellers> {
            //const user = this.usersRepository.create(data);
            console.log("clalled mysql add method called")
            console.log(data)
            

            //creating a user account from sellers
            const user = new users();
            user.username=data.username;
            user.password=data.password;
            user.mail=data.mail;
            user.status=false
            await this.userInfoRepository.save(user);
            //data.user=user;

            delete data.username;
            delete data.password;
            data.role = "sellerAdmin";
            data.user_id = user._id;
            data.status = "0";
            await this.sellerinfoRepository.save(data);

            //creating table for storing sellers and users primary_key
            const seller_user = new sellerUser();
            seller_user.user_id=user._id;
            seller_user.seller_id=data._id;
            await this.sellerUserRepository.save(seller_user);

            


            
            return await this.sellerinfoRepository.save(data);
            // await this.usersmRepository.save(data);
            // return user;
            //return user;
        }


        //update
        async update(data: any) {

            console.log("status", data["status"]);
            
            
            for (let key in data) {
                if (data.hasOwnProperty(key) && key!="status") {
                    data[key].status = data["status"];
                    // let sellerId = new sellers();
                    // sellerId._id =data[key]._id;
                    // sellerId._id = data[key]._id 
                    let _id  = data[key]._id;
                    // tmp = new ObjID(tmp)
                    console.log("_id",_id);
                    delete data[key]._id;
                    // let x = await this.sellerinfoRepository.update({_id}, data[key]); 
                    let x = await this.sellerinfoRepository.findOne(_id); 
                    delete x.shopName;
                    delete x.role;
                    delete x.status;
                    delete x.cellNo;
                    delete x.mail;
                    console.log("x======",x);
                    let xup = await this.sellerinfoRepository.update(x,data[key]); 
                    console.log("Vlaue=================",xup)
                }
              }
              return data;
            // console.log("ID====================",_id);
            // await this.sellerinfoRepository.update({_id}, data); 
            // return await this.sellerinfoRepository.findOne(_id)
            //return this.sellerinfoRepository.update({_id}, data);
          }

}
