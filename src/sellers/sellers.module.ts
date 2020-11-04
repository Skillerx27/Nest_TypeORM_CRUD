import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerUser } from 'src/common/Entity/user_seller.entity';
import { AuthModule } from 'src/users/auth/auth.module';
import { UserInfo } from 'src/users/userdata/userdetails.entity';
import { SellerInfo } from './sellerdata/sellerdetails.entity';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';

@Module({
  imports: [forwardRef(() => AuthModule),TypeOrmModule,TypeOrmModule.forFeature([SellerInfo],'ebhuvon'),TypeOrmModule.forFeature([UserInfo],'ebhuvon'),
  TypeOrmModule.forFeature([sellerUser],'ebhuvon')],
  controllers: [ SellersController],
  providers: [ SellersService,],
  exports: [SellersService]
})
export class SellersModule {}
