/*// src/routes/operations.ts
import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Operation } from '../models/Operation';
import { User } from '../models/User';
import { authenticateJWT } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authenticateJWT, async (req, res) => {
  const { type, amount, description } = req.body;

  if (!['compra', 'venta'].includes(type)) {
    return res.status(400).json({ error: 'Tipo inválido (compra o venta)' });
  }

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ error: 'Monto inválido' });
  }

  const userRepository = AppDataSource.getRepository(User);
  const operationRepository = AppDataSource.getRepository(Operation);

  const user = await userRepository.findOneBy({ id: req.user.id });

  if (!user) {
    return res.status(401).json({ error: 'Usuario no encontrado' });
  }

  const operation = operationRepository.create({
    type,
    amount,
    description,
    user,
  });

  await operationRepository.save(operation);

  return res.status(201).json({ message: 'Operación registrada', operation });
});

export default router;*/

import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Operation } from '../models/Operation';
import { User } from '../models/User';
//import { authenticateJWT } from '../middleware/authMiddleware';


const operationService = require("../services/operation.service");

class OperationController {
 
  async authenticateJWT(req, res, next) {

  //export const authenticateJWT = async (req, res, next) => {
    try {

        const { type, amount, description } = req.body;

        if (!['compra', 'venta'].includes(type)) {
            return res.status(400).json({ error: 'Tipo inválido (compra o venta)' });
        }

        if (!amount || isNaN(amount)) {
            return res.status(400).json({ error: 'Monto inválido' });
        }

        /*const userRepository = AppDataSource.getRepository(User);
        const operationRepository = AppDataSource.getRepository(Operation);
*/

        const userRepository = AppDataSource.getRepository(User);
        const operationRepository = operationService.operationRepository(Operation);

        const user = await userRepository.findOneBy({ id: req.user.id });

        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const operation = operationRepository.create({
            type,
            amount,
            description,
            user,
        });

        await operationRepository.save(operation);

        return res.status(201).json({ message: 'Operación registrada', operation });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

}

module.exports = new OperationController();