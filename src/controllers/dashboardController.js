const { Psicologos, Atendimentos, Pacientes } = require('../models');

const dashboardController = {
    async listarAtendimentos(req, res) {
        try {
            const atendimento = await Atendimentos.findAll();
            res.json(atendimento.length);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async listarPacientes(req, res) {
        try {
            const paciente = await Pacientes.findAll();
            res.json(paciente.length)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async listarPsicologos(req, res) {
        try {
            const psicologo = await Psicologos.findAll();
            res.json(psicologo.length)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async listarMedia(req, res) {
        try {
            const psicologos = await Psicologos.findAll();
            const atendimento = await Atendimentos.findAll();
            const media = atendimento.length/psicologos.length
            res.json(media)
        } catch (error) {
            res.status(500).json(error)
        }
    },
};

module.exports = dashboardController;