import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany
} from 'typeorm';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import Balance from './balance.model';

@Entity()
export default class Currency extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  label!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  country!: string;

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

  @OneToMany(() => Balance, balance => balance.currency)
  balances!: Balance[];
}

export interface CreateCurrency {
  label: string;
  country: string;
  code: string;
  symbol: string;
}
