const Usuario = require('../models/Usuario');

const usuarioController = {
  create: async (req, res) => {
    try {
      const nuevoUsuario = new Usuario(req.body);
      const usuarioGuardado = await nuevoUsuario.save();
      res.status(201).json({
        message: 'Usuario creado exitosamente',
        usuarioId: usuarioGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo usuario', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los usuarios', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (usuarioActualizado) {
        res.status(200).json(usuarioActualizado);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
      if (usuarioEliminado) {
        res.status(200).json({
          message: 'Usuario eliminado exitosamente',
          usuarioId: usuarioEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario', detalle: error.message });
    }
  }
};

module.exports = usuarioController;
