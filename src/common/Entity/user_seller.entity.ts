
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class userSeller{

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    user_id: string;

    @Column()
    seller_id: string;

    @Column()
    username: string;

    @Column()
    password: string;
    
    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    
    
    
}
