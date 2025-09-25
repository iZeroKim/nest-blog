import { User } from "src/user/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from "typeorm";

@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 100
    })
    firstName?: string;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 100
    })
    lastName?: string;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 10
    })
    gender?: string; 
    
    @Column({
        type: 'timestamp',
        nullable: true
    })
    dateOfBirth?: Date;

    @Column({
        type: 'text',
        nullable: true
    })
    bio?: string;

    @Column({
        type: 'text',
        nullable: true
    })
    profileImage?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToOne(()=>User, (user)=> user.profile)
    user: User;
}