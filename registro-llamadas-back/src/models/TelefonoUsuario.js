const { Schema, model } = require('mongoose');

const telefonoUsuarioSchema = new Schema({
  claveU: { type: String, required: true },
  numeroTel: { type: String, required: true }
});

const TelefonoUsuario = model('TelefonoUsuario', telefonoUsuarioSchema);

module.exports = TelefonoUsuario;