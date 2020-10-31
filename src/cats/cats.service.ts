import { Injectable } from '@nestjs/common';
import { Cats } from './interfaces/cat.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './sql/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usersDTO } from './sql/users.dto';
import { Userm } from './mongo/userm.entity';
import { usermsDTO } from './mongo/userms.dto';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(Userm)private readonly usersmRepository: Repository<Userm>){}

    find(username: string): Promise<Userm> {
      return this.usersmRepository.findOne(username);
    }


    // async find(username: string) : Promise<Userm> {

    //     console.log("FINDING USER DETAILS")
    //     //var x = this.catModel.findOne({ username : username});
    //     //console.log(x)

    //     return await this.User.findOne({ username : username});
    // }
    findbyid(username: string): Promise<Userm> {
      return this.usersmRepository.findOne(username);
    }


    // async findbyid(username: string) : Promise<Cats> {

    //     console.log("FINDING USER DETAILS")
    //     var x = this.catModel.findOne({ username : username});

    //     return await this.catModel.findOne({ _id : username});
    // }

    async create(data: mongoInter):Promise<Userm> {
      //const user = this.usersRepository.create(data);
      console.log("clalled mysql add method called")
      console.log(data)
      return  this.usersmRepository.save(data);
      // await this.usersmRepository.save(data);
      // return user;
      //return user;
    }

    // async create(cat : Cats ) : Promise<Cats> {
    //     console.log("create method called")

    //     const new_email = new this.catModel(cat);
    //     return await new_email.save()
    // }


    async update (id: number,data: usermsDTO) {
      await this.usersmRepository.update({id}, data)
      return await this.usersmRepository.findOne(id)
    }

    // async update(id : string, cat: Cats ) : Promise<Cats>{
    //     console.log("update called")

    //     return await this.catModel.findByIdAndUpdate(id, cat, {new : true});
    // }

    async delete(id: string) {
    await this.usersmRepository.delete(id);
  }
    // async delete(id : string ) : Promise<Cats>{
    //     return await this.catModel.findByIdAndDelete(id)
    // }

    // async updatedby(id : string, cat: Cats ) : Promise<Cats>{
    //     return await this.catModel.findByIdAndUpdate(id, cat, {new : true});
    // }

    // async createdby(id : string, cat: Cats ) : Promise<Cats>{

    //     return await this.catModel.findByIdAndUpdate(id, cat, {new : true});
    // }



}


@Injectable()
export class CatsServicesql {
  constructor(@InjectRepository(User)private readonly usersRepository: Repository<User> ) {}

    //   async findAll(): Promise<User[]> {
    //     return await this.usersRepository.find();
    //   }

  async update (id: number,data: usersDTO) {
    await this.usersRepository.update({id}, data)
    return await this.usersRepository.findOne(id)
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }



  async addUser(data: User) {
    //const user = this.usersRepository.create(data);
    console.log("Service Create Method")
    console.log(data)
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    return user;
    //return user;
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);
  }
}