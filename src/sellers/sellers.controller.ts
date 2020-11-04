import { Body, Controller, Post, UseGuards ,Request, Get, Param, Put} from '@nestjs/common';

import { AuthService } from 'src/users/auth/auth.service';
import { JwtAuthGuard } from 'src/users/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/users/auth/local-auth.guard';
import { SellerInfo } from './sellerdata/sellerdetails.entity';
import { SellerInfoInter } from './sellerdata/sellerinter.interface';
import { SellersService } from './sellers.service';

@Controller('sellers')
export class SellersController {


    constructor(private readonly sellerInfoService: SellersService,private authService: AuthService) {}

    @Post('registration')
    createfirst(@Body() user: SellerInfoInter) {
        console.log("clalled mysql post")
        return this.sellerInfoService.create(user);
    }

    @Get('all')
    find(): Promise<SellerInfo[]> {
        return this.sellerInfoService.findAll();
    }

    
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // update(@Param('id') id,@Body() user: SellerInfoInter) {
    //     return this.sellerInfoService.update(id, user);
    // }




}
