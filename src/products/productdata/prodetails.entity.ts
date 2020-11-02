
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class prodetails {

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

    @Column()
    imgurl: string;

    @Column()
    price: string;

    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    

    
}
