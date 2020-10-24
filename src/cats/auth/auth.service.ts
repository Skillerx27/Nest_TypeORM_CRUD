import { Injectable } from '@nestjs/common';
import { CatsService } from '../cats.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { Cats } from '../interfaces/cat.interfaces'
import { CatDTO } from '../dtos/cats.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: CatsService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<Cats> {
    console.log("auth.service called")
    
    const user = await this.usersService.find(username);
    
    if (user && user.password === pass) {
        console.log("auth service recalled for checking")
      const result = user;
      
      console.log("auth service recalled with valid user details from database ")
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { useremail: user.useremail, username: user.username };
    console.log("payload from login")
    // console.log(user.useremail)
    // console.log(user.username)
    // console.log(payload)
    // console.log(user.password)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}