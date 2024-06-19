// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/users', userController.createUser);

// Rota para listar todos os usuários
router.get('/users', userController.getAllUsers);

// Rota para obter um usuário pelo ID
router.get('/users/:id', userController.getUserById);

// Rota para atualizar um usuário pelo ID
router.put('/users/:id', userController.updateUser);

// Rota para deletar um usuário pelo ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
