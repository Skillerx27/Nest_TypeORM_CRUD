import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';

import { UserInfo } from '../userdata/userdetails.entity';
import { SellersService } from 'src/sellers/sellers.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private sellerService: SellersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log("auth.service called")

    const user = await this.usersService.find(username);
    
    console.log("user details=====",user)
    if (user && user.password === pass)  {
        console.log("auth service recalled for checking")
      const result = user;

      console.log("auth service recalled with valid user details from database ")
      return result;
    }

    
    const nuser = await this.sellerService.find(username);
    if (nuser && nuser.password === pass)  {
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
     console.log(payload)
    // console.log(user.password)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}