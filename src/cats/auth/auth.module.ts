import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { CatsModule } from '../cats.module';
import { CatsService } from '../cats.service'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Model } from 'mongoose';

@Module({
  imports: [
    forwardRef(() => CatsModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },

    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService,PassportModule],
})
export class AuthModule {}