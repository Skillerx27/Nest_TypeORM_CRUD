import { ObjectID } from "typeorm";
import { category } from "./procategory.entity";

export interface categoryInterface {
    

    id: string;
    title: string;
    slug: string;
    order: string;
    status: string;
    banner: string;
    icon: string;
    image: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;

    
    
    
    

}