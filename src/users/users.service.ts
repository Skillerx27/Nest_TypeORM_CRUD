import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from './userdata/userdetails.entity';
import { UserInfoInter } from './userdata/userinter.interface';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserInfo,'cats')private readonly userInfoRepository: Repository<UserInfo>){}

    find(username: string): Promise<UserInfo> {
        return this.userInfoRepository.findOne({username:username});
      }
  

    async create(data: UserInfoInter):Promise<UserInfo> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        return  this.userInfoRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
    }

    
}
