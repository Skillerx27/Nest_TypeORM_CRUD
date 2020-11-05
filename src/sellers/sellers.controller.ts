import { Body, Controller, Post, UseGuards ,Request, Get, Param, Put} from '@nestjs/common';

import { AuthService } from 'src/users/auth/auth.service';
import { JwtAuthGuard } from 'src/users/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/users/auth/local-auth.guard';
import { sellers } from './sellerdata/sellerdetails.entity';
import { SellerInfoInter } from './sellerdata/sellerinter.interface';
import { SellersService } from './sellers.service';

@Controller('sellers')
export class SellersController {


    constructor(private readonly sellerInfoService: SellersService,private authService: AuthService) {}

    @Post('registration')
    createfirst(@Body() user: SellerInfoInter) {
        return this.sellerInfoService.create(user);
    }

    @Get('all')
    find(): Promise<sellers[]> {
        return this.sellerInfoService.findAll();
    }

    
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }


    // @Put('access/:id')
    // permission(@Param('id') id,@Body() user: sellers) {
    //     console.log("UPDATE CALLED=========",user)
    //     return this.sellerInfoService.permission(id, user);
    // }


    // @Post('access')
    // permission(@Body() body) {
    //     return this.sellerInfoService.permission(body.id);
    // }

    
    @Post('access')
    permission(@Body() params) {
        return this.sellerInfoService.permission(params.id,params);
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // update(@Param('id') id,@Body() user: SellerInfoInter) {
    //     return this.sellerInfoService.update(id, user);
    // }




}
