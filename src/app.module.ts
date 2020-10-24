import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './cats/auth/auth.module'
import {createConnections} from "typeorm";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './cats/sql/user.entity';

@Module({
  imports: [ CatsModule, MongooseModule.forRoot('mongodb://localhost:27017/cats'),AuthModule, 
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [User],
    synchronize: true,
  }),CatsModule],
  controllers: [AppController],
  providers: [AppService,CatsModule,AuthModule],

})
export class AppModule {}
