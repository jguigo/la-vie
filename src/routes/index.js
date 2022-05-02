const express = require("express");
const routes = express.Router();
const atualizacaoPsicologosValidator = require("../validation/psicologos/atualizacaoPsicologosValidator");
const cadastroPsicologoValidator = require('../validation/psicologos/cadastroPsicologoValidator')
const cadastroPacienteValidator = require('../validation/pacientes/attCadastroPaciente');
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");
const authController = require('../controllers/authController')
const authLoginValidation = require('../validation/auth/login')
const auth = require('../middleware/auth')

const atendimentosController = require("../controllers/atendimentosController");



// login
routes.post('/login', authLoginValidation, authController.login)

//crud pacientes
routes.get("/pacientes", pacientesController.exibirPacientes);
routes.get("/pacientes/:id", pacientesController.exibirPaciente);
routes.post("/pacientes", cadastroPacienteValidator, pacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", cadastroPacienteValidator, pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", pacientesController.deletarPacientes);


//crud psicologos
routes.get('/psicologos', psicologosController.listarPsicologos)
routes.post('/psicologos', auth , cadastroPsicologoValidator, psicologosController.cadastrarPsicologo)
routes.get('/psicologos/:id', psicologosController.listarPsicologoID)
routes.put('/psicologos/:id', atualizacaoPsicologosValidator, psicologosController.atualizarPsicologo)
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo) 


//crud atendimento
 routes.get("/atendimentos", atendimentosController.listarAtendimento)
 routes.get("/atendimentos/:id", atendimentosController.listarAtendimentoId)
 routes.post("/atendimentos", atendimentosController.criarAtendimento)

// routes.post()
// routes.put()
// routes.delete()





module.exports = routes;