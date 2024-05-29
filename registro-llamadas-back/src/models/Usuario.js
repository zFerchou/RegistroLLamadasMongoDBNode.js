const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  claveU: { type: String, required: true },
  nombreU: { type: String, required: true },
  appU: { type: String, required: true },
  apmU: { type: String, required: true },
  fechaRegistro: { type: Date, required: true },
  fechaNac: { type: Date, required: true }
});

const Usuario = model('Usuario', usuarioSchema);

module.exports = Usuario;
