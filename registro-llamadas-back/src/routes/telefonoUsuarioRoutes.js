const express = require('express');
const router = express.Router();
const telefonoUsuarioController = require('../controllers/telefonoUsuarioController');

router.post('/', telefonoUsuarioController.create);
router.get('/', telefonoUsuarioController.getAll);
router.get('/:id', telefonoUsuarioController.getById);
router.put('/:id', telefonoUsuarioController.update);
router.delete('/:id', telefonoUsuarioController.delete);

module.exports = router;
