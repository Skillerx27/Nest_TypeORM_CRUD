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

            await this.userInfoRepository.save(user);
            data.user=user;
            
            return await this.sellerinfoRepository.save(data);
            // await this.usersmRepository.save(data);
            // return user;
            //return user;
        }

}
