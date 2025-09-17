import { Profile } from "src/profile/profile.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50,
        unique: true
    })
    userName: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    password: string;


    
    @OneToOne(()=>Profile, {
        cascade: ['insert', 'remove']
    })
    @JoinColumn()
    profile?: Profile;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;


}