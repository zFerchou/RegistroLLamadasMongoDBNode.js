const express = require('express');
const app = express();
const mongoose = require('mongoose');  
const bodyparser = require('body-parser')
require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/llamadas', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error en la conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');

    app.use('/api', require('./routes/index'));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

module.exports = app;

  