import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from './card.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column({ type: 'varchar', nullable: false })
  firstName!: string;

  @Column({ type: 'varchar', nullable: false })
  lastName!: string;

  @Column({ type: 'bigint', nullable: false })
  phone!: number;

  @Column({ type: 'varchar', nullable: false })
  email!: string;

  @OneToMany(type => Card, card => card.user)
  cards!: Card[];
}
