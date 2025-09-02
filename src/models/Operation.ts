// src/entities/Operation.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  type: 'compra' | 'venta' | undefined;

  @Column('decimal')
  amount: number | undefined;

  @Column({ nullable: true })
  description: string | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @ManyToOne(() => User, (user) => user.operations)
  user: User | undefined;


}