import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { category } from './category/categorydata/procategory.entity';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { products } from './products/productdata/prodetails.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { users } from './users/userdata/userdetails.entity';
import { AuthModule } from './users/auth/auth.module';
import { SellersController } from './sellers/sellers.controller';
import { SellersService } from './sellers/sellers.service';
import { SellersModule } from './sellers/sellers.module';
import { sellers } from './sellers/sellerdata/sellerdetails.entity';
import { Connection } from 'typeorm';
import { sellerUser } from './common/Entity/user_seller.entity';
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        name:'ebhubon',
        useFactory: () => ({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'ebhubon',
        entities: [category,users,sellers,products,sellerUser],
        synchronize: false,
        useNewUrlParser: true,
        logging: true,
        //autoLoadEntities: true,
         useUnifiedTopology: true,
      }),
    }),
  //   TypeOrmModule.forRoot({
  //   name:'ebhubon',
  //   type: 'mongodb',
  //   host: 'localhost',
  //   port: 27017,
  //   database: 'ebhubon',
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
  TypeOrmModule.forFeature([category ], 'ebhubon'),
  TypeOrmModule.forFeature([products ], 'ebhubon'),
  TypeOrmModule.forFeature([users ], 'ebhubon'),
  TypeOrmModule.forFeature([sellers ], 'ebhubon'),
  TypeOrmModule.forFeature([sellerUser],'ebhubon'),
  CategoryModule, ProductsModule, UsersModule,AuthModule, SellersModule, MediaModule],
  controllers: [AppController, CategoryController, ProductsController, UsersController, SellersController, MediaController],
  providers: [AppService, CategoryService, ProductsService, UsersService,AuthModule, SellersService, MediaService],
  exports:[TypeOrmModule]
})
export class AppModule {
  
}
