import { Body, Controller, Post,Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserInfo } from './userdata/userdetails.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userInfoService: UsersService,private authService: AuthService) {}


    @Post('registration')
    createfirst(@Body() user: UserInfo) {
        console.log("clalled mysql post")
        return this.userInfoService.create(user);
    }
    
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
}
