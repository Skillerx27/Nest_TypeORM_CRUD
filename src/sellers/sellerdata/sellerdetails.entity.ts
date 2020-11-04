import { type, userInfo } from 'os';
import { UserInfo } from 'src/users/userdata/userdetails.entity';
import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class SellerInfo  {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  shopName: string;

  @Column()
  username: string;

  @Column()
  password: string;

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

  @Column()
  status: string;

  @OneToOne(type=>UserInfo)
  @JoinColumn()
  user:UserInfo
}