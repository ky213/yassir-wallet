import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { IsNumber, IsNotEmpty } from 'class-validator';
import Account from './account.model';
import Country from './country.model';

@Entity()
export default class Balance extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric', nullable: false, default: 0 })
  @IsNotEmpty()
  @IsNumber()
  ammount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Account, account => account.balances)
  account: Account;

  @ManyToOne(() => Country, country => country.balances)
  country: Country;
}
