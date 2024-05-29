const express = require('express');
const router = express.Router();

const registroLLamadasController = require("../controllers/llamadasControllers");

router.post('/', registroLLamadasController.create);
router.get('/', registroLLamadasController.getAll);
router.get('/:numeroRegistro', registroLLamadasController.getByNumeroRegistro);
router.put('/:numeroRegistro', registroLLamadasController.update);
router.delete('/:numeroRegistro', registroLLamadasController.delete);

module.exports = router;
