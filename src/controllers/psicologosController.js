const Psicologos = require("../models/Psicologos");


const psicologosController = {
    async cadastrar(req, res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;
            const novoPsicologo = await Psicologos.create({
                nome, 
                email, 
                senha, 
                apresentacao,
            });
            return res.status(201).json(novoPsicologo);
        }
        catch (error) {
            console.log("---> DEU RUIM NO CADASTRAR DO USUARIO");
            console.error(error);
            return res.status(400).json("Erro ao cadastrar usuario");
        }
    },
}
 
module.exports = psicologosController;
