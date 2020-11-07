import { users } from "src/users/userdata/userdetails.entity";
import { ObjectID } from "typeorm";

export interface sellerinterface {
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
    CreatedBy: string;
    CreatedAt: string;
    UpdatedBy: string;
    UpdatedAt: string;
    status: string;
}