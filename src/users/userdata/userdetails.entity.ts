import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class users {
  @ObjectIdColumn()
    _id: ObjectID;

  @Column()
  fullName: string;

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
  status: boolean;

  @Column()
  CreatedBy: string;

  @Column()
  CreatedAt: string;

  @Column()
  UpdatedBy: string;

  @Column()
  UpdatedAt: string;
}