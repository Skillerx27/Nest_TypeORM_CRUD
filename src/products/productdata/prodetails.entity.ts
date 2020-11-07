
import { category } from 'src/category/categorydata/procategory.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class products {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    id: string;

    @Column()
    name : string;

    @Column()
    title: string;

    // @Column()
    // category: string;

    @OneToMany(type=>category,category=>category._id)
    @JoinTable()
    category: category[];

    @ObjectIdColumn()
    categories_id: ObjectID;

    @ObjectIdColumn()
    categoryId: ObjectID;

    @Column()
    price: string;

    @Column()
    status: string;

    @Column()
    quantity: string;

    @Column()
    icon: string;

    @Column()
    image: string;

    @Column()
    banner: string;

    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    

    
}
