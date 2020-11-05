import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { users } from './userdata/userdetails.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({

  imports: [forwardRef(() => AuthModule),TypeOrmModule,TypeOrmModule.forFeature([users],'ebhubon')],
  controllers: [ UsersController],
  providers: [ UsersService],
  exports: [UsersService]



})
export class UsersModule {}
