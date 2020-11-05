import { type, userInfo } from 'os';
import { sellerUser } from 'src/common/Entity/user_seller.entity';
import { users } from 'src/users/userdata/userdetails.entity';
import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, OneToOne, JoinColumn } from 'typeorm';
import {  } from 'class-validator'

@Entity()
export class sellers  {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  shopName: string;

  // @Column()
  // username: string;

  // @Column()
  // password: string;

  @Column()
  cellNo: string;

  @Column()
  mail: string;

  @Column()
  address: string;

  @Column()
  DOB: string;

  @Column()
  gender: string;

  @Column()
  nationality: string;
  
  @Column()
  role: string;

  @Column()
  CreatedBy: string;

  @Column()
  CreatedAt: string;

  @Column()
  UpdatedBy: string;

  @Column()
  UpdatedAt: string;

  @Column({ default: false })
  status: boolean;

  @OneToOne(type=>users)
  @JoinColumn()
  user:users

  @OneToOne(type=>sellerUser)
  @JoinColumn()
  sellerUser:sellerUser

}