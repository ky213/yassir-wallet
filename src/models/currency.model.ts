/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinTable,
  BaseEntity
} from 'typeorm';
import Balance from './balance.model';

@Entity()
export default class Currency extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  countryName!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  currencyLabel!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  currencyCode!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(type => Balance, balance => balance.id)
  @JoinTable()
  balance!: Balance;
}
