import { forwardRef, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { CatsController } from './cats.controller';
import { CatsService, CatsServicesql } from './cats.service';
import { CatsSchema } from './schemas/cats.schemas'
import { AuthModule } from './auth/auth.module'
import { CatCreatedMiddleware } from '../cats/common/middleware/cat-created.middleware';
import { CatUpdatedMiddleware } from '../cats/common/middleware/cat-updated.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './sql/user.entity';
import { Userm } from './mongo/userm.entity';
@Module({

  imports: [forwardRef(() => AuthModule),TypeOrmModule.forFeature([Userm]),TypeOrmModule.forFeature([User])],
  controllers: [ CatsController],
  providers: [ CatsService,CatsServicesql],
  exports: [CatsService,CatsServicesql]
})

export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CatCreatedMiddleware)
      .forRoutes({path: 'cats/registration',method:RequestMethod.POST},{path: 'cats/fresh',method:RequestMethod.POST});

      // consumer
      // .apply(CatUpdatedMiddleware)
      // .forRoutes({path: 'cats/:id',method:RequestMethod.PUT})

  //   consumer
  //   .apply(CatUpdatedMiddleware)
  //   .exclude(
  //   { path: 'cats/registration', method: RequestMethod.POST }
  //  )
  //  .forRoutes(CatsController);
  }


}
