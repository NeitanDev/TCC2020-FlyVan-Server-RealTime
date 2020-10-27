const express = require('express');

const routes = express.Router();

const RastreamentoController = require('./controllers/RastreamentoController');

routes.post('/rastrear',RastreamentoController.rastrear);
routes.post('/notificar',RastreamentoController.notificar);
routes.post('/cancela/viagem',RastreamentoController.cancelarViagem);

module.exports = routes;