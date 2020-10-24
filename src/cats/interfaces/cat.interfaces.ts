import { Document } from 'mongoose';


export interface Cats extends Document {
    id?: string;
    useremail?: string;
    username?: string;
    password?: string;
    CreatedBy?: string;
    CreatedAt?: string;
    UpdatedBy?: string;
    UpdatedAt?: string;
}