import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './cats/auth/auth.module'
import {createConnections} from "typeorm";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './cats/sql/user.entity';
import { Userm } from './cats/mongo/userm.entity';

@Module({
  imports: [ CatsModule,AuthModule,
  TypeOrmModule.forRoot({

    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'cats',
    //entities: [Userm],
    synchronize: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [
      Userm,User
    ],
  }),
  TypeOrmModule.forRoot({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    //entities: [User],
    synchronize: true,
    entities: [
      User
    ]
  }),
  CatsModule],
  controllers: [AppController],
  providers: [AppService,CatsModule,AuthModule],

})
export class AppModule {}
