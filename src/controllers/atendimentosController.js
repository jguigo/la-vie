const { Atendimentos } = require('../models')

const AtendimentosController = {
    async listarAtendimento(req, res) {
        try {
            const atendimentos = await Atendimentos.findAll();
            res.status(200).json(atendimentos);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async listarAtendimentoId(req, res) {
        try {
            const { id } = req.params;
            const atendimentos = await Atendimentos.findByPk(id);
            if (!atendimentos) {
                return res.status(404).json("Id não encontrado");
            }
            res.status(200).json(atendimentos);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    async criarAtendimento(req, res) {
        try {
            const { paciente_id, data_atendimento, observacao } = req.body;
            const { id } = req.auth;
            const novoAtendimento = await Atendimentos.create({ paciente_id, psicologo_id: id, data_atendimento, observacao });
            
            res.status(201).json(novoAtendimento);

        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                res.status(400).json("Id não encontrado");
            }
        }
    },
}

        

module.exports = AtendimentosController