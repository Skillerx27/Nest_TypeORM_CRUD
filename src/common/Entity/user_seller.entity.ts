
import { sellers } from 'src/sellers/sellerdata/sellerdetails.entity';
import { SellersController } from 'src/sellers/sellers.controller';
import { users } from 'src/users/userdata/userdetails.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class sellerUser{

    @ObjectIdColumn()
    _id: ObjectID;
    
    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    
    // @OneToMany( ()=> sellers, sellers=>sellers._id)
    // seller : sellers

    // @OneToMany( ()=> users, user=>user._id)
    // user : users


    @ManyToOne(() => sellers, sellers => sellers._id)
    public seller!: sellers;

    @ManyToOne(() => users, user => user._id)
    public user!: users;
}
