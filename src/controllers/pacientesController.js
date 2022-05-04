const { Pacientes } = require("../models");

const PacientesController = {
   async listar(req, res) {
      try {
         const pacientes = await Pacientes.findAll( {where: {status:1} } );
         res.status(200).json(pacientes);
      } catch (error) {
         res.status(500).json(error);
      }
   },

   async listarID(req, res) {
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

   async cadastrar(req, res) {
      try {
         const { nome, email, idade } = req.body;
         const novoPaciente = await Pacientes.create({ nome, email, idade });
         res.status(201).json(novoPaciente);
      } catch (error) {
         if (error.name === "SequelizeUniqueConstraintError") {
         return res.status(400).json("Email já cadastrado!");
         
         }
         res.status(500).json(error);
      }
   },

   async atualizar(req, res) {
      try {
         const { id } = req.params;
         const { nome, email, idade } = req.body;
         let pacientes = await Pacientes.findByPk(id);

         if (!pacientes) {
            return res.status(404).json("Id não encontrado");
         }

         await Pacientes.update({ nome, email, idade }, { where: { id } });

         const pacienteAtualizado = await Pacientes.findByPk(id);
         res.status(200).json(pacienteAtualizado);
      } catch (error) {
         res.status(400).json("Email já cadastrado!");
      }
   },

   async deletar(req, res) {
      try {
         const { id } = req.params;
         const pacientes = await Pacientes.findByPk(id);

         if (!pacientes) {
            return res.status(404).json("Id não encontrado");
         }

         await Pacientes.update( { status: 0}, { where: { id } });

         res.status(204).json("Usuario inativo.");
      } catch (error) {
         res.status(500).json(error);
      }
   },
};

module.exports = PacientesController;
