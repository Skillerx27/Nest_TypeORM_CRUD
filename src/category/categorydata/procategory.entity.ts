
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, ManyToOne, OneToMany, Tree, JoinTable, JoinColumn, TreeChildren, TreeParent, IsNull, BaseEntity, ManyToMany } from 'typeorm';

import {validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsDefined, isInt, min} from "class-validator";
import { type } from 'os';
import { products } from 'src/products/productdata/prodetails.entity';
 


@Entity()
export class category {
    // @PrimaryGeneratedColumn()
    // id: number
    

    

    @ObjectIdColumn()
    _id: ObjectID;


    @IsDefined()
    @Column()
    title : string;

    
    @Column()
    slug: string;

    
    // @Column()
    // id: string;

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

    @Column()
    children: category[];


    @ManyToOne(type => category, category => category.childCategories)
    parentCategory: category;

    @OneToMany(type => category, category => category.parentCategory)
    childCategories: category[];





    @ManyToOne(type=>products, products=>products._id)
    //@JoinTable()
    products:products;
    
}
