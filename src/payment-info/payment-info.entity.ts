import { Column, DeleteDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PaymentInfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 10,
            nullable: true
        }
    )
    accountNumber?: string;


    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })
    accountName?: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}