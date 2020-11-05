
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

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

    @Column()
    category: string;

    @ObjectIdColumn()
    categoryId: ObjectID;

    @ObjectIdColumn()
    categories_id: ObjectID;

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
