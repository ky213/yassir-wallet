import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import Country from './country.model';
import Card from './card.model';

@Entity()
export default class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ type: 'varchar', nullable: false })
  @IsNotEmpty()
  @IsString()
  type: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  currency: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Country, country => country.paymentMethods)
  @JoinTable({ name: 'paymentmethod_country' })
  countries: Country[];

  @OneToMany(() => Card, card => card.paymentMethod)
  cards: Card[];
}
