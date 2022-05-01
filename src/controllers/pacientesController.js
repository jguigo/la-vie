const Pacientes = require("../models/Pacientes");

const PacientesController = {
  async exibirPacientes(req, res) {
    const pacientes = await Pacientes.findAll();

    res.status(200).json(pacientes);
  },
  async exibirPaciente(req, res) {
    const { id } = req.params;
    const pacientes = await Pacientes.findByPk(id);
    if (!pacientes) {
      return res.status(404).json("Id não encontrado");
    }
    res.status(200).json(pacientes);
  },
  async cadastrarPacientes(req, res) {
    const { nome, email, idade } = req.body;
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade,
    });
    res.status(201).json(novoPaciente);
  },
  async atualizarPacientes(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    let pacientes = await Pacientes.findByPk(id);
    if (!pacientes) {
      return res.status(404).json("Id não encontrado");
    }
    await Pacientes.update(
      {
        nome,
        email,
        idade,
      },
      {
        where: { id },
      }
    );
    const pacienteAtualizado = await Pacientes.findByPk(id);
    res.status(200).json(pacienteAtualizado);
  },
  async deletarPacientes(req, res) {
    const { id } = req.params;
    const pacientes = await Pacientes.findByPk(id);
    if (!pacientes) {
      return res.status(404).json("Id não encontrado");
    }
    await Pacientes.destroy({
      where: {
        id,
      },
    });
    res.status(204);
  },
};

module.exports = PacientesController;
