
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class sellerUser{

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    user_id: ObjectID;

    @Column()
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
