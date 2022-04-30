const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Psicologos.hasMany(Atendimentos,{
   foreignKey: "psicologo_id"
})
Atendimentos.belongsTo(Psicologos,{
   foreignKey: "psicologo_id"
})

Pacientes.hasMany(Atendimentos,{
   foreignKey: "paciente_id"
})
Atendimentos.belongsTo(Pacientes,{
   foreignKey: "paciente_id"
})

Psicologos.belongsToMany(Pacientes, {
   foreignKey: "psicologo_id",
   through: Atendimentos
})
Pacientes.belongsToMany(Psicologos, {
   foreignKey: "paciente_id",
   through: Atendimentos
})