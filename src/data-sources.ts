// src/data-source.ts
import { DataSource } from 'typeorm';
import { User } from './models/User';
import { Operation } from './models/Operation';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tu_usuario',
  password: 'tu_password',
  database: 'mi_base_datos',
  synchronize: true,
  logging: false,
  entities: [User, Operation],
});