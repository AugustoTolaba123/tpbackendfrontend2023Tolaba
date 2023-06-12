//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', productoCtrl.getEspectadores);
router.post('/', productoCtrl.createEspectador);
router.get('/:id', productoCtrl.getEspectador);

//exportamos el modulo de rutas
module.exports = router;