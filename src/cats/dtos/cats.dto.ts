import { Document } from 'mongoose';


export class CatDTO extends Document {
    readonly useremail : string;
    readonly username : string;
    readonly password : string;
    CreatedBy: string;
    CreatedAt: string;
    UpdatedBy: string;
    UpdatedAt: string;

}