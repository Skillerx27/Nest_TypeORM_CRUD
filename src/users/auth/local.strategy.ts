import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

import { UserInfo } from '../userdata/userdetails.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserInfo> {
    console.log("local.strategy called")
    console.log(username)
    const user = await this.authService.validateUser(username,password);
    
    if (!user) {
      throw new NotFoundException();
    }
    console.log("local.strategy called is returing valid user")
    return user;
  }
}