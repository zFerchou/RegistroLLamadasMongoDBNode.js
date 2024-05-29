const TelefonoUsuario = require('../models/TelefonoUsuario');

const telefonoUsuarioController = {
  create: async (req, res) => {
    try {
      const nuevoTelefono = new TelefonoUsuario(req.body);
      const telefonoGuardado = await nuevoTelefono.save();
      res.status(201).json({
        message: 'Teléfono de usuario creado exitosamente',
        telefonoId: telefonoGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo teléfono de usuario', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const telefonos = await TelefonoUsuario.find();
      res.status(200).json(telefonos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los teléfonos de usuario', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const telefono = await TelefonoUsuario.findById(req.params.id);
      if (telefono) {
        res.status(200).json(telefono);
      } else {
        res.status(404).json({ error: 'Teléfono de usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el teléfono de usuario', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const telefonoActualizado = await TelefonoUsuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (telefonoActualizado) {
        res.status(200).json(telefonoActualizado);
      } else {
        res.status(404).json({ error: 'Teléfono de usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el teléfono de usuario', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const telefonoEliminado = await TelefonoUsuario.findByIdAndDelete(req.params.id);
      if (telefonoEliminado) {
        res.status(200).json({
          message: 'Teléfono de usuario eliminado exitosamente',
          telefonoId: telefonoEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Teléfono de usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el teléfono de usuario', detalle: error.message });
    }
  }
};

module.exports = telefonoUsuarioController;
