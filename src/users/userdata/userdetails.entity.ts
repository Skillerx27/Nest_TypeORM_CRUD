import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class UserInfo {
  @ObjectIdColumn()
    _id: ObjectID;

  @Column()
  fullname: string;

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
}