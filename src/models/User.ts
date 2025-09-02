// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Operation } from './Operation';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ unique: true })
  email: string | undefined;

  @Column()
  password: string | undefined;

  @OneToMany(() => Operation, (operation) => operation.user)
  operations: Operation[] | undefined;
}