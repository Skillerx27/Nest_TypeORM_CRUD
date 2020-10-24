import * as mongoose from 'mongoose';


export const CatsSchema = new mongoose.Schema({
    useremail : String,
    username : String,
    password : String,
    CreatedBy: String,
    CreatedAt: String,
    UpdatedBy: String,
    UpdatedAt: String,
});