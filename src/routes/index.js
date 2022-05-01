const express = require("express");
const routes = express.Router();
const psicologosController = require('../controllers/psicologosController');
const atualizacaoPsicologosValidator = require("../validation/atualizacaoPsicologosValidator");
const cadastroPsicologoValidator = require('../validation/cadastroPsicologoValidator')
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");



//crud pacientes
routes.get("/pacientes", pacientesController.exibirPacientes);
routes.get("/pacientes/:id", pacientesController.exibirPaciente);
routes.post("/pacientes", pacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", pacientesController.deletarPacientes);


//crud psicologos
routes.get('/psicologos', psicologosController.listarPsicologos)
routes.post('/psicologos', cadastroPsicologoValidator, psicologosController.cadastrarPsicologo)
routes.get('/psicologos/:id', psicologosController.listarPsicologoID)
routes.put('/psicologos/:id', atualizacaoPsicologosValidator, psicologosController.atualizarPsicologo)
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo) 
// routes.post()

// routes.put()
// routes.delete()

//crud atendimento
// routes.get()
// routes.post()
// routes.put()
// routes.delete()





module.exports = routes;