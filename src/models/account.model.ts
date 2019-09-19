import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
  Column,
} from 'typeorm';
import { IsUUID, IsNotEmpty } from 'class-validator';
import Balance from './balance.model';
import Card from './card.model';

@Entity()
export default class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Balance, balance => balance.account)
  balances: Balance[];

  @OneToMany(() => Card, card => card.account)
  cards: Card[];
}
