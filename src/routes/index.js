const express = require("express");
const routes = express.Router();
const psicologos = require('../controllers/psicologosController');
const atualizacaoPsicologosValidator = require("../validation/atualizacaoPsicologosValidator");
const cadastroPsicologoValidator = require('../validation/cadastroPsicologoValidator')


//crud pacientes
// routes.get()
// routes.post()
// routes.put()
// routes.delete()

//crud psicologos
routes.get('/psicologos', psicologos.listarPsicologos)
routes.post('/psicologos', cadastroPsicologoValidator, psicologos.cadastrarPsicologo)
routes.get('/psicologos/:id', psicologos.listarPsicologoID)
routes.put('/psicologos/:id', atualizacaoPsicologosValidator, psicologos.atualizarPsicologo)
routes.delete('/psicologos/:id', psicologos.deletarPsicologo) 
// routes.post()
// routes.put()
// routes.delete()

//crud atendimento
// routes.get()
// routes.post()
// routes.put()
// routes.delete()





module.exports = routes;