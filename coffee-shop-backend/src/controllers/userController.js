// src/controllers/userController.js

const User = require('../models/User');

// Método para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para listar todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Método para obter um usuário pelo ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Método para atualizar um usuário pelo ID
exports.updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado para atualização' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para deletar um usuário pelo ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado para exclusão' });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
