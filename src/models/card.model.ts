import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './user.model';

@Entity()
export class Card {
  @PrimaryColumn({ type: 'numeric', nullable: false })
  number!: number;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'date', nullable: false })
  exp!: number;

  @Column({ type: 'integer', nullable: false })
  cvv!: number;

  @ManyToOne(type => User, user => user.cards)
  user!: User;
}
