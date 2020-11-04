
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class sellerUser{

    @ObjectIdColumn()
    _id: ObjectID;

    @ObjectIdColumn()
    user_id: ObjectID;

    @ObjectIdColumn()
    seller_id: ObjectID;
    
    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    
    
    
}
