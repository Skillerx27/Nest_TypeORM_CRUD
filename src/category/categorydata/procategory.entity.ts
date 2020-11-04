
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, ManyToOne, OneToMany, Tree, JoinTable, JoinColumn, TreeChildren, TreeParent, IsNull } from 'typeorm';

import {validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator";
 


@Entity()
export class proCategory {
    // @PrimaryGeneratedColumn()
    // id: number

    @ObjectIdColumn()
    _id: ObjectID;
    
    @IsNotEmpty({message: "field should not be empty"})
    @Column()
    title : string;

    @Column()
    slug: string;

    @Column()
    id: string;

    @Column()
    order: string;

    @Column()
    status: string;


    @Column()
    banner: string;

    @Column()
    icon : string;

    @Column()
    image: string;

    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    @ObjectIdColumn()
    parentId: ObjectID;


    @ManyToOne(type => proCategory, category => category.childCategories)
    parentCategory: proCategory;

    @OneToMany(type => proCategory, category => category.parentCategory)
    childCategories: proCategory[];
    
}
