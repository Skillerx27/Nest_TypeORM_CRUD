import { ObjectID } from "typeorm";
import { category } from "./procategory.entity";

export interface categoryInterface {
    

    id: string;
    title: string;
    slug: string;
    order: string;
    status: string;
    parentCategories:string;
    banner: string;
    icon: string;
    image: string;
    parentId: ObjectID;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;

    
    
    
    

}