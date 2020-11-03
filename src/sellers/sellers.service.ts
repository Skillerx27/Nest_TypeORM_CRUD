import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { UserInfo } from 'src/users/userdata/userdetails.entity';
import { Repository } from 'typeorm';
import { SellerInfo } from './sellerdata/sellerdetails.entity';
import { SellerInfoInter } from './sellerdata/sellerinter.interface'

@Injectable()
export class SellersService {

    constructor(
        @InjectRepository(SellerInfo,'cats') private readonly sellerinfoRepository: Repository<SellerInfo>,
        @InjectRepository(UserInfo,'cats') private readonly userInfoRepository: Repository<UserInfo>){}


        async find(username: string): Promise<SellerInfo> {
            const name = await this.sellerinfoRepository.findOne({username:username});
            
            if(name!=null)
            {
                console.log("HERE1111111111111111")
                console.log(name)
                return await this.sellerinfoRepository.findOne({username:username});
            }
            const email = await this.sellerinfoRepository.findOne({useremail:username});
            if(email!=null)
            {
                console.log("HERE2222222222222")
                console.log(name)
                return await this.sellerinfoRepository.findOne({useremail:username});
            }
            
            
        }


        async update (id: number,data: SellerInfoInter) {
        await this.sellerinfoRepository.update({id}, data)
                return await this.sellerinfoRepository.findOne(id)
        }

       
  
        async findAll(): Promise<SellerInfo[]> {
            return  this.sellerinfoRepository.find();
        }

        async create(data: SellerInfoInter):Promise<SellerInfo> {
            //const user = this.usersRepository.create(data);
            console.log("clalled mysql add method called")
            console.log(data)

            const user = new UserInfo();
            user.username=data.username;
            user.password=data.password;
            user.useremail=data.useremail;


            await this.userInfoRepository.save(user);
            data.user=user;
            
            return await this.sellerinfoRepository.save(data);
            // await this.usersmRepository.save(data);
            // return user;
            //return user;
        }

}
