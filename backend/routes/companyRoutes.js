const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { CompanyController} = require('../controllers');
//desestructuracion

//obtenemos todos las habilidades
router.get('/', CompanyController.getCompanies);

//insertamos una habilidad
router.post('/', CompanyController.insertCompany);

// Actualizamos una habilidad
router.put('/:id', CompanyController.updateCompany)

// Eliminar una habilidad
router.delete('/:id',CompanyController.deleteCompany)

// Obtener una habilidad
router.get('/:id',CompanyController.getCompany)


module.exports = router;