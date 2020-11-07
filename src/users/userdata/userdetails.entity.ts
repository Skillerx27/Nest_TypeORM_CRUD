import { sellerUser } from 'src/common/Entity/user_seller.entity';
import { sellers } from 'src/sellers/sellerdata/sellerdetails.entity';
import { StringDecoder } from 'string_decoder';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, ManyToMany, OneToMany } from 'typeorm';

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


  @OneToMany(() => sellerUser, sellerUser => sellerUser._id)
  public userId!: sellerUser[];
}