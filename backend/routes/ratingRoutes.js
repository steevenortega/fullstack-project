const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { RatingController} = require('../controllers');
//desestructuracion

//obtenemos todos las habilidades
router.get('/', RatingController.getRatings);

//insertamos una habilidad
router.post('/', RatingController.insertRating);

// Actualizamos una habilidad
router.put('/:id', RatingController.updateRating)

// Eliminar una habilidad
router.delete('/:id',RatingController.deleteRating)

// Obtener una habilidad
router.get('/:id',RatingController.getRating)


module.exports = router;