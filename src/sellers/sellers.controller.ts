import { Body, Controller, Post, UseGuards ,Request, Get, Param, Put} from '@nestjs/common';
import { config } from 'process';

import { AuthService } from 'src/users/auth/auth.service';
import { JwtAuthGuard } from 'src/users/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/users/auth/local-auth.guard';
import { sellers } from './sellerdata/sellerdetails.entity';
import { SellerInfoInter } from './sellerdata/sellerinter.interface';
import { SellersService } from './sellers.service';
//import * as jwt_decode from 'jwt-decode'
import jwt_decode from 'jwt-decode';
import { sellerinterface } from './sellerdata/showall.interface';

@Controller('sellers')
export class SellersController {


    constructor(private readonly sellerInfoService: SellersService,private authService: AuthService) {}

    @Post('registration')
    createfirst(@Body() user: SellerInfoInter): Promise<sellers> {
        return this.sellerInfoService.create(user);
    }

    @Get('all')
    find(): Promise<sellerinterface> {
        return this.sellerInfoService.findAll();
    }


    @Get('specific')
    personalDetails(@Param() params) {
        return this.sellerInfoService.personDetails(params.id);
    }

    
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }



    // @Get('decode/:id')
    // authDecode(@Param() params ): Promise<prodetailsInterface>  {
    //     console.log("params.id=============", params.id)
    //     return params.id;
    //     //return this.categoryService.authDecode(params.id);
    // }


    @Get('decode/:id')
    authDecode(@Param('id') req){ 
    console.log("DECODE====================", req)
    
    // const header = req.headers.authorization
    // const head_split = header.substr(7,header.length-7)
     const decoded = jwt_decode(req);
     //console.log(decoded)
     return this.sellerInfoService.authDecode(decoded);

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
        console.log(params)
        return this.sellerInfoService.permission(params.id,params);
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // update(@Param('id') id,@Body() user: SellerInfoInter) {
    //     return this.sellerInfoService.update(id, user);
    // }

    
    
    @Post('delete')
    delete(@Body() body) {
        console.log(body)
        return this.sellerInfoService.delete(body.id);
    }


    @Post('update')
    update(@Body() params) {
        console.log(params)
        

        // console.log("asasdasdasdasd",params[0])
        // console.log(x.length)
        
       
        return this.sellerInfoService.update(params);
    }


}
