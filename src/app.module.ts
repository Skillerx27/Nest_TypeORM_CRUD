import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { proCategory } from './category/categorydata/procategory.entity';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { prodetails } from './products/productdata/prodetails.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserInfo } from './users/userdata/userdetails.entity';
import { AuthModule } from './users/auth/auth.module';
import { SellersController } from './sellers/sellers.controller';
import { SellersService } from './sellers/sellers.service';
import { SellersModule } from './sellers/sellers.module';
import { SellerInfo } from './sellers/sellerdata/sellerdetails.entity';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        name:'ebhuvon',
        useFactory: () => ({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'ebhuvon',
        entities: [proCategory,UserInfo,SellerInfo,prodetails],
        synchronize: false,
        useNewUrlParser: true,
        logging: true,
        //autoLoadEntities: true,
         useUnifiedTopology: true,
      }),
    }),
  //   TypeOrmModule.forRoot({
  //   name:'ebhuvon',
  //   type: 'mongodb',
  //   host: 'localhost',
  //   port: 27017,
  //   database: 'ebhuvon',
  //   entities: [proCategory,UserInfo,SellerInfo,prodetails],
  //   synchronize: false,
  //   useNewUrlParser: true,
  //   logging: true,
  //   //autoLoadEntities: true,
  //   useUnifiedTopology: true,
  // }),
  // TypeOrmModule.forRoot({
  //   name:'prodetail',
  //   type: 'mongodb',
  //   host: 'localhost',
  //   port: 27017,
  //   database: 'cats',
  //   entities: [prodetails],
  //   synchronize: true,
  //   useNewUrlParser: true,
  //   logging: true,
  //   //autoLoadEntities: true,
  //   useUnifiedTopology: true,
  // }),
  // TypeOrmModule.forRoot({
  //   name:'userdetails',
  //   type: 'mongodb',
  //   host: 'localhost',
  //   port: 27017,
  //   database: 'cats',
  //   entities: [UserInfo],
  //   synchronize: true,
  //   useNewUrlParser: true,
  //   logging: true,
  //   //autoLoadEntities: true,
  //   useUnifiedTopology: true,
  // }),
  // TypeOrmModule.forRoot({
  //   name:'sellerdetails',
  //   type: 'mongodb',
  //   host: 'localhost',
  //   port: 27017,
  //   database: 'cats',
  //   entities: [SellerInfo],
  //   synchronize: true,
  //   useNewUrlParser: true,
  //   logging: true,
  //   //autoLoadEntities: true,
  //   useUnifiedTopology: true,
  // }),
  TypeOrmModule.forFeature([proCategory ], 'ebhuvon'),
  TypeOrmModule.forFeature([prodetails ], 'ebhuvon'),
  TypeOrmModule.forFeature([UserInfo ], 'ebhuvon'),
  TypeOrmModule.forFeature([SellerInfo ], 'ebhuvon'),
  CategoryModule, ProductsModule, UsersModule,AuthModule, SellersModule],
  controllers: [AppController, CategoryController, ProductsController, UsersController, SellersController],
  providers: [AppService, CategoryService, ProductsService, UsersService,AuthModule, SellersService],
  exports:[TypeOrmModule]
})
export class AppModule {
  
}
