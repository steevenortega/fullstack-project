const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { SkillController} = require('../controllers');
//desestructuracion

//obtenemos todos las habilidades
router.get('/', SkillController.getSkills);

//insertamos una habilidad
router.post('/', SkillController.insertSkill);

// Actualizamos una habilidad
router.put('/:id', SkillController.updateSkill)

// Eliminar una habilidad
router.delete('/:id',SkillController.deleteSkill)

// Obtener una habilidad
router.get('/:id',SkillController.getSkill)


module.exports = router;