import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Userm {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  useremail: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  CreatedBy: string;

  @Column()
  CreatedAt: string;

  @Column()
  UpdatedBy: string;

  @Column()
  UpdatedAt: string;
}