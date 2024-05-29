const express = require('express');
const router = express.Router();
let cors = require('cors')
const bodyparser = require('body-parser') 
router.use(express.json());

router.use(cors());
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))


const llamadasRoutes = require('../routes/llamadasRoutes');
const telefonoUsuarioRoutes = require('../routes/telefonoUsuarioRoutes');
const tipoRoutes = require('../routes/tipoRoutes');
const usuarioRoutes = require('../routes/usuarioRoutes');


router.use('/llamadas', llamadasRoutes);
router.use('/telefonos', telefonoUsuarioRoutes);
router.use('/tipo', tipoRoutes);
router.use('/usuario', usuarioRoutes);


module.exports = router;