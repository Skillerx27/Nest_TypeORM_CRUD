import { Controller,Get,Post,Put,Delete,Param,Body,Request, UseGuards } from '@nestjs/common';
import { CatsService, CatsServicesql } from './cats.service';
import { CatDTO } from './dtos/cats.dto'

import { Cats } from './interfaces/cat.interfaces'
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import * as jwt_decode from 'jwt-decode'
import { User } from './sql/user.entity';
import { usersDTO } from './sql/users.dto';
import { Userm } from './mongo/userm.entity';
import { usermsDTO } from './mongo/userms.dto';



@Controller('cats')
export class CatsController{

    constructor(private readonly CatsService: CatsService,private authService: AuthService ,private service: CatsServicesql) {}



    @UseGuards(JwtAuthGuard)
    @Get(':id')
    find(@Param() params): Promise<Userm> {
        return this.CatsService.findbyid(params.id);
    }
    // @UseGuards(JwtAuthGuard)
    // @Get(':id')
    // find(@Param('id') id): Promise<Cats> {
    //     console.log("GET CALLED")
    //     return this.CatsService.findbyid(id);
    // }

    @UseGuards(JwtAuthGuard)
    @Post('registration')
    createfirst(@Body() user: Userm) {
        console.log("clalled mysql post")
        return this.CatsService.create(user);
    }

    // @UseGuards(JwtAuthGuard)
    // @Post('registration')
    // createfirst(@Body() details: CatDTO): Promise<Cats> {
    //     console.log("post mehtod registration calleds")
    //     console.log(details)
    //     return this.CatsService.create(details)
    // }


    //Insering new username and password for login purpose.


    @Post('fresh')
    create(@Body() user: Userm):Promise<any> {
        console.log("clalled mysql post")
        return this.CatsService.create(user);
    }

    // //Insering new username and password for login purpose.
    // @Post('fresh')
    // create(@Request() req:any,@Body() details: CatDTO): Promise<Cats> {
    //     console.log("post mehtod calleds")
    //     return this.CatsService.create(details)
    // }


    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id,@Body() user: usermsDTO) {
        return this.CatsService.update(id, user);
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // update(@Request() req:any,@Param('id') id, @Body() bdy : CatDTO): Promise<Cats>{
    //     console.log("Update called")
    //     return this.CatsService.update(id,bdy);
    //}

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param() params) {
        return this.CatsService.delete(params.id);
    }
    // @UseGuards(JwtAuthGuard)
    // @Delete(':id')
    // delete(@Param('id') id):  Promise<Cats>{
    //     return this.CatsService.delete(id);
    // }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile/p')
    getProfile(@Request() req) {
        console.log('user called here')
      //console.log(req);
      return req.user;
    }



    //mysql routh


    @Get('mysql/g/:id')
    get(@Param() params): Promise<User> {
        return this.service.findOne(params.id);
    }

    // @Get()
    // async showAllUsers(): Promise<User[]> {
    //   return this.service.showAll();
    // }

    @Post('mysql/c')
    createsql(@Body() user: User) {
        console.log("Controller Post Create Method")
        return this.service.addUser(user);
    }

    @Put('mysql/u/:id')
    updatesql(@Param('id') id,@Body() user: usersDTO) {
        return this.service.update(id, user);
    }


    @Delete('mysql/d/:id')
    deleteUser(@Param() params) {
        return this.service.remove(params.id);
    }
}



