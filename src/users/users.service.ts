import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from './userdata/userdetails.entity';
import { UserInfoInter } from './userdata/userinter.interface';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserInfo,'cats')private readonly userInfoRepository: Repository<UserInfo>){}

    async find(username: string): Promise<UserInfo> {
        const name = await this.userInfoRepository.findOne({username:username});
        
        if(name!=null)
        {
            console.log("HERE1111111111111111")
            console.log(name)
            return await this.userInfoRepository.findOne({username:username});
        }
        const email = await this.userInfoRepository.findOne({useremail:username});
        if(email!=null)
        {
            console.log("HERE2222222222222")
            console.log(name)
            return await this.userInfoRepository.findOne({useremail:username});
        }
        
        
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
