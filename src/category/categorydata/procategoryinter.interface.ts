import { ObjectID } from "typeorm";
import { proCategory } from "./procategory.entity";

export interface categoryInterface {
    
    name: string;
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

    
    
    
    parentId:ObjectID;
    parentCategory:proCategory;

}