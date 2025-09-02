// src/index.ts
import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-sources';
import operationRoutes from '../src/routes/operations';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('DB conectada');
    app.use('/api/operaciones', operationRoutes);

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((error) => console.error(error));