
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, ManyToOne, OneToMany, Tree, JoinTable, JoinColumn, TreeChildren, TreeParent } from 'typeorm';

@Entity()

export class proCategory {
    // @PrimaryGeneratedColumn()
    // id: number

    @ObjectIdColumn()
    _id: ObjectID;
    

    @Column()
    title : string;

    @Column()
    slug: string;


    @Column()
    order: string;

    @Column()
    status: string;


    @Column()
    banner: string;

    @Column()
    icon : string;

    @Column()
    image: string;

    @Column()
    createdAt: string;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: string;

    @Column()
    updatedBy: string;

    @ManyToOne(type => proCategory, category => category.childCategories)
    parentCategory: proCategory;

    @OneToMany(type => proCategory, category => category.parentCategory)
    childCategories: proCategory[];
    
}
