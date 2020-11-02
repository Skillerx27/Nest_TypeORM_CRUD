
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class commonPropert{

    @ObjectIdColumn()
    _id: ObjectID;

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
