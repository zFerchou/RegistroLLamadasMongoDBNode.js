const RegistroLLamadas = require('../models/Llamadas');

const registroLLamadasController = {
  create: async (req, res) => {
    try {
      const lastLlamada = await RegistroLLamadas.findOne().sort({ numeroRegistro: -1 });
      const nextNumeroRegistro = lastLlamada ? lastLlamada.numeroRegistro + 1 : 1;

      const nuevaLlamada = new RegistroLLamadas({
        ...req.body,
        numeroRegistro: nextNumeroRegistro
      });

      const llamadaGuardada = await nuevaLlamada.save();
      res.status(201).json({
        message: 'Registro de llamada creada exitosamente',
        llamadaId: llamadaGuardada._id,
        numeroRegistro: llamadaGuardada.numeroRegistro
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo registro de llamada', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const llamadas = await RegistroLLamadas.find();
      res.status(200).json(llamadas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los registros de llamadas', detalle: error.message });
    }
  },

  getByNumeroRegistro: async (req, res) => {
    try {
      const llamada = await RegistroLLamadas.findOne({ numeroRegistro: req.params.numeroRegistro });
      if (llamada) {
        res.status(200).json(llamada);
      } else {
        res.status(404).json({ error: 'Registro de llamada no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el registro de llamada', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const llamadaActualizada = await RegistroLLamadas.findOneAndUpdate(
        { numeroRegistro: req.params.numeroRegistro },
        req.body,
        { new: true }
      );
      if (llamadaActualizada) {
        res.status(200).json(llamadaActualizada);
      } else {
        res.status(404).json({ error: 'Registro de llamada no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el registro de llamada', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const llamadaEliminada = await RegistroLLamadas.findOneAndDelete({ numeroRegistro: req.params.numeroRegistro });
      if (llamadaEliminada) {
        res.status(200).json({
          message: 'Registro de llamada eliminado exitosamente',
          llamadaId: llamadaEliminada._id
        });
      } else {
        res.status(404).json({ error: 'Registro de llamada no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el registro de llamada', detalle: error.message });
    }
  }
};

module.exports = registroLLamadasController;
