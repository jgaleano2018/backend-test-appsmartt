const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operations');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, operationController.authenticateJWT);

export default router;