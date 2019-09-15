import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne
} from 'typeorm';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import Country from './country.model';
import Account from './account.model';

@Entity()
export default class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @Column({ type: 'varchar', nullable: false })
  @IsNotEmpty()
  @IsString()
  type!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  currency!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Account, account => account.paymentMethods)
  account!: Account;

  @ManyToMany(() => Country, country => country.paymentMethods)
  @JoinTable()
  countries!: Country[];
}

export interface CreatePaymentMethod {
  name: string;
  type: string;
  currency: string;
  account: { id: string };
  country: { id: string };
}

export interface UpdatePaymentMethod {
  name?: string;
  type?: string;
  currency?: string;
}
