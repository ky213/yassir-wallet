import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Column,
  ManyToOne,
} from 'typeorm';
import Account from './account.model';
import PaymentMethod from './paymentMethod.model';

@Entity()
export default class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'json' })
  metaData: object;

  @ManyToOne(() => Account, account => account.cards)
  account: Account;

  @ManyToOne(() => PaymentMethod, paymentMethod => paymentMethod.cards)
  paymentMethod: PaymentMethod;
}
