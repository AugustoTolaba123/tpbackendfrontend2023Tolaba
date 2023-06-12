//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTicket);
router.get('/:categoriaEspectador', ticketCtrl.getTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
//falta implementar
//router.get('/:id', agenteCtrl.getAgente);
//router.put('/:id', agenteCtrl.editAgente);
//router.delete('/:id', agenteCtrl.deleteAgente);
//exportamos el modulo de rutas
module.exports = router;