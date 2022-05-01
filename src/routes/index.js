const express = require("express");
const routes = express.Router();
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");


//crud pacientes
routes.get("/pacientes", pacientesController.exibirPacientes);
routes.get("/pacientes/:id", pacientesController.exibirPaciente);
routes.post("/pacientes", pacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", pacientesController.deletarPacientes);

//crud pacientes
// routes.get()
routes.post("/psicologos", psicologosController.cadastrar);
// routes.put()
// routes.delete()

//crud atendimento
// routes.get()
// routes.post()
// routes.put()
// routes.delete()





module.exports = routes;