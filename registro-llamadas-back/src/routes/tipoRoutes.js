const express = require('express');
const router = express.Router();
const tipoLlamadaController = require('../controllers/tipoLlamadaController');

router.post('/', tipoLlamadaController.create);
router.get('/', tipoLlamadaController.getAll);
router.get('/:id', tipoLlamadaController.getById);
router.put('/:id', tipoLlamadaController.update);
router.delete('/:id', tipoLlamadaController.delete);

module.exports = router;
