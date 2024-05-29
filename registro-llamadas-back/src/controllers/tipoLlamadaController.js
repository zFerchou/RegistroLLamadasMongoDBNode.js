const TipoLlamada = require('../models/TipoLlamada');

const tipoLlamadaController = {
  create: async (req, res) => {
    try {
      const nuevoTipo = new TipoLlamada(req.body);
      const tipoGuardado = await nuevoTipo.save();
      res.status(201).json({
        message: 'Tipo de llamada creado exitosamente',
        tipoId: tipoGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo tipo de llamada', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const tipos = await TipoLlamada.find();
      res.status(200).json(tipos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los tipos de llamada', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const tipo = await TipoLlamada.findById(req.params.id);
      if (tipo) {
        res.status(200).json(tipo);
      } else {
        res.status(404).json({ error: 'Tipo de llamada no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el tipo de llamada', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const tipoActualizado = await TipoLlamada.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (tipoActualizado) {
        res.status(200).json(tipoActualizado);
      } else {
        res.status(404).json({ error: 'Tipo de llamada no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el tipo de llamada', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const tipoEliminado = await TipoLlamada.findByIdAndDelete(req.params.id);
      if (tipoEliminado) {
        res.status(200).json({
          message: 'Tipo de llamada eliminado exitosamente',
          tipoId: tipoEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Tipo de llamada no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el tipo de llamada', detalle: error.message });
    }
  }
};

module.exports = tipoLlamadaController;