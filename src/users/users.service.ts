import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './userdata/userdetails.entity';
import { UserInfoInter } from './userdata/userinter.interface';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(users,'ebhubon')private readonly userInfoRepository: Repository<users>){}

    async find(username: string): Promise<users> {
        console.log("FINDING DETAILS",username)
        const name = await this.userInfoRepository.findOne({username:username});
        console.log(name)
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
  

    async create(data: UserInfoInter):Promise<users> {
        //const user = this.usersRepository.create(data);
        console.log("clalled mysql add method called")
        console.log(data)
        return  this.userInfoRepository.save(data);
        // await this.usersmRepository.save(data);
        // return user;
        //return user;
    }

    
}
