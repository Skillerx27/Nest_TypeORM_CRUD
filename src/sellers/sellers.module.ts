import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerUser } from 'src/common/Entity/user_seller.entity';
import { AuthModule } from 'src/users/auth/auth.module';
import { users } from 'src/users/userdata/userdetails.entity';
import { sellers } from './sellerdata/sellerdetails.entity';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';

@Module({
  imports: [forwardRef(() => AuthModule),TypeOrmModule,TypeOrmModule.forFeature([sellers],'ebhubon'),TypeOrmModule.forFeature([users],'ebhubon'),
  TypeOrmModule.forFeature([sellerUser],'ebhubon')],
  controllers: [ SellersController],
  providers: [ SellersService,],
  exports: [SellersService]
})
export class SellersModule {}
