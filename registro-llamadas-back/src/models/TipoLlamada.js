const { Schema, model } = require('mongoose');

const tipoLlamadaSchema = new Schema({
  claveTipoLlamada: { type: String, required: true },
  nombreTipo: { type: String, required: true },
  costoXMinuto: { type: Number, required: true }
});

const TipoLlamada = model('TipoLlamada', tipoLlamadaSchema);

module.exports = TipoLlamada;
