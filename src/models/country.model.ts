import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
  OneToMany
} from 'typeorm';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import PaymentMethod from './paymentMethod.model';
import Balance from './balance.model';

@Entity()
export default class Country extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  currency!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(3)
  code!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  symbol!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Balance, balance => balance.country)
  balances!: Balance[];

  @ManyToMany(() => PaymentMethod, paymentMethod => paymentMethod.countries)
  paymentMethods!: PaymentMethod[];
}

export interface CreateCountry {
  label: string;
  country: string;
  code: string;
  symbol: string;
}

export interface UpdateCountry {
  label?: string;
  country?: string;
  code?: string;
  symbol?: string;
}
