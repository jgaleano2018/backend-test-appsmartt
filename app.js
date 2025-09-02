// src/index.ts
import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './src/data-sources';
import operationRoutes from './src/routes/operations';

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

  /*const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/operaciones', operationRoutes);

// Middleware de errores
app.use(errorHandler);

module.exports = app;*/