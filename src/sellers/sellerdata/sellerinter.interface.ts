import { UserInfo } from "src/users/userdata/userdetails.entity";
import { ObjectID } from "typeorm";

export interface SellerInfoInter {
    _id: ObjectID;
    shopName: string;
    username:string;
    password:string;
    cellNo: string;
    mail: string;
    address: string;
    DOB: string;
    gender: string;
    nationality: string;
    role: string;
    CreatedBy?: string;
    CreatedAt?: string;
    UpdatedBy?: string;
    UpdatedAt?: string;
    user:UserInfo
}