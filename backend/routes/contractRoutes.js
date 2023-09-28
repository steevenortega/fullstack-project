const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { ContractController} = require('../controllers');
//desestructuracion

//obtenemos todos las habilidades
router.get('/', ContractController.getContracts);

//insertamos una habilidad
router.post('/', ContractController.insertContract);

// Actualizamos una habilidad
router.put('/:id', ContractController.updateContract)

// Eliminar una habilidad
router.delete('/:id',ContractController.deleteContract)

// Obtener una habilidad
router.get('/:id',ContractController.getContract)


module.exports = router;