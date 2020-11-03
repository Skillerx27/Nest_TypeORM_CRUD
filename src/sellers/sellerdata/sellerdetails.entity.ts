import { type, userInfo } from 'os';
import { UserInfo } from 'src/users/userdata/userdetails.entity';
import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class SellerInfo  {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  shopname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  cellNo: string;

  @Column()
  useremail: string;

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

  @OneToOne(type=>UserInfo)
  @JoinColumn()
  user:UserInfo
}