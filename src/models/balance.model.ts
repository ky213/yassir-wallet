/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinTable,
  BaseEntity
} from 'typeorm';
import Account from './account.model';
import Currency from './currency.model';

@Entity()
export default class Balance extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'numeric', nullable: false, default: 0 })
  ammount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(type => Account, account => account.id)
  account!: Account;

  @OneToOne(type => Currency, currency => currency.id)
  @JoinTable()
  currency!: Currency;
}
