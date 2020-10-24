import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { CatDTO } from 'src/cats/dtos/cats.dto';
import {Request} from 'express'

@Injectable()
export class CatCreatedMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log("CREATED MIDDLEWARE HAVE BEEN CALLED")  
    console.log('req body in create middleware:',req.body)
    var cratedByy = req.body.username
    var createdAt = new Date()
    req.body.CreatedBy = cratedByy
    req.body.CreatedAt = String(createdAt)
    next();
  }
}
