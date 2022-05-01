const express = require("express");
const routes = express.Router();
const psicologosController = require("../controllers/psicologosController");


//crud pacientes
// routes.get()
// routes.post()
// routes.put()
// routes.delete()

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