const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { PaymentController} = require('../controllers');
//desestructuracion

//obtenemos todos las habilidades
router.get('/', PaymentController.getPayments);

//insertamos una habilidad
router.post('/', PaymentController.insertPayment);

// Actualizamos una habilidad
router.put('/:id', PaymentController.updatePayment)

// Eliminar una habilidad
router.delete('/:id',PaymentController.deletePayment)

// Obtener una habilidad
router.get('/:id',PaymentController.getPayment)


module.exports = router;