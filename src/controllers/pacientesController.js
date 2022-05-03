const { Pacientes } = require("../models");

const PacientesController = {
   async exibirPacientes(req, res) {
     try {
       const pacientes = await Pacientes.findAll();
       res.status(200).json(pacientes);
     } catch (error) {
       res.status(500).json(error);
     }
   },

   async exibirPaciente(req, res) {
     try {
       const { id } = req.params;
       const pacientes = await Pacientes.findByPk(id);
       if (!pacientes) {
          return res.status(404).json("Id não encontrado");
       }
       res.status(200).json(pacientes);
       
     } catch (error) {
       res.status(500).json(error);
     }
   },

   async cadastrarPacientes(req, res) {
      try {
         const { nome, email, idade } = req.body;
         const novoPaciente = await Pacientes.create({ nome, email, idade });
         res.status(201).json(novoPaciente);

      } catch (error) {
         if (error.name === "SequelizeUniqueConstraintError") {
            res.status(400).json("Email já cadastrado!");
         }
      }
   },

   async atualizarPacientes(req, res) {
      try {
         const { id } = req.params;
         const { nome, email, idade } = req.body;

         let pacientes = await Pacientes.findByPk(id);
         if (!pacientes) {
            return res.status(404).json("Id não encontrado");
         }

         await Pacientes.update(
           { nome, email, idade }, 
           { where: { id } }
           );

         const pacienteAtualizado = await Pacientes.findByPk(id);
         res.status(200).json(pacienteAtualizado);
      } catch (error) {
         res.status(400).json("Email já cadastrado!");
      }
   },

   async deletarPacientes(req, res) {
     try {
       const { id } = req.params;
       const pacientes = await Pacientes.findByPk(id);
       if (!pacientes) {
          return res.status(404).json("Id não encontrado");
       }
       await Pacientes.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;');
       await Pacientes.destroy({
          where: {
             id,
          },
       });
       await Pacientes.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;');
       res.status(204).send();
       
     } catch (error) {
       res.status(500).json(error);
     }
   },
};

module.exports = PacientesController;
