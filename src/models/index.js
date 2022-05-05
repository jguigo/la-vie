const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Psicologos.belongsToMany(Pacientes, {
   foreignKey: "psicologo_id",
   through: Atendimentos
})
Pacientes.belongsToMany(Psicologos, {
   foreignKey: "paciente_id",
   through: Atendimentos
})

module.exports = {
   Psicologos,
   Pacientes,
   Atendimentos
}


