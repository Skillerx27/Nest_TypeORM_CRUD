import { IsNotEmpty } from "class-validator";
import { ObjectID } from "typeorm";
import { proCategory } from "./procategory.entity";

export class categoryvalidator {
    

    id: string;
    @IsNotEmpty({message:"field should not be empty"})
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