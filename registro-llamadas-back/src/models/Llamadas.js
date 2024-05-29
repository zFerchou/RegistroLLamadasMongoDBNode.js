const { Schema, model } = require('mongoose');

const registroLLamadasSchema = new Schema({
    numeroRegistro: String,
    claveU: String,
    numeroTel: String,
    fechaLlamada: Date,
    minutosUtilizados: Number,
    numeroMarcado: String,
    claveTipoLlamada: String
});

const RegistroLLamadas = model('RegistroLLamadas', registroLLamadasSchema);
module.exports = RegistroLLamadas;
