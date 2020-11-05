import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { sellerUser } from 'src/common/Entity/user_seller.entity';

import { users } from 'src/users/userdata/userdetails.entity';
import { ObjectID, Repository } from 'typeorm';
import { sellers } from './sellerdata/sellerdetails.entity';
import { SellerInfoInter } from './sellerdata/sellerinter.interface'

@Injectable()
export class SellersService {

    constructor(
        @InjectRepository(sellers,'ebhubon') private readonly sellerinfoRepository: Repository<sellers>,
        @InjectRepository(sellerUser,'ebhubon') private readonly sellerUserRepository: Repository<sellerUser>,
        @InjectRepository(users,'ebhubon') private readonly userInfoRepository: Repository<users>){}


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

       
  
        async findAll(): Promise<sellers[]> {
            return  this.sellerinfoRepository.find();
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
            data.status = false;
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

}
