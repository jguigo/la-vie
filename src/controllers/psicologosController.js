const { Psicologos } = require('../models')
const bcrypt = require('bcryptjs')

const psicologoController = {
    listarPsicologos: async (req, res) => {
        try{
        const listaDePsicologos = await Psicologos.findAll()
        
        if(!listaDePsicologos){
            return res.status(200).json('[]')
        }

        res.status(200).json(listaDePsicologos)

    } catch(error){
        console.log('Erro no servidor');
        console.error(error);
        return res.status(500).json('Erro no servidor')
    }
},
    cadastrarPsicologo: async (req, res) => {
        try {
            
        
        const { nome, email, senha, apresentacao } = req.body

        constEmailExistente = await Psicologos.findOne({
            where: {
                email
            }
        })

        if(constEmailExistente) {
            return res.status(400).json('Esse email já existe!')
        }

        const novaSenha = bcrypt.hashSync(senha,10)

        const novoPsicologo = await Psicologos.create({
             nome,
             email, 
             senha: novaSenha,
             apresentacao
         })

         return res.status(201).json(novoPsicologo)
    }
    catch (error) {
            console.error("Erro no servidor");
            console.log(error);

            res.status(500).json("Erro no servidor")
    }
    } ,

    listarPsicologoID: async (req, res) => {

        try{
        const { id } = req.params
        

        const psicologoPorID = await Psicologos.findByPk(id, 
            {
            
            attributes: { exclude: ['senha']}
        })

        if(!psicologoPorID){
            return res.status(404).json("Id não encontrado")
        }

        res.status(200).json(psicologoPorID)

    } catch(error) {
        console.error("Erro no servidor");
        console.log(error);
        res.status(500).json('Erro no servidor')
    }
},
    atualizarPsicologo: async (req, res) => {
        try{
        const { id } = req.params
        const { nome, email, senha, apresentacao} = req.body

        const novaSenhaAtualizada = bcrypt.hashSync(senha, 10)

        const psicologo = await Psicologos.findByPk(id)

        if(!psicologo) {
            return res.status(404).json("Id não encontrado");
        }

         await Psicologos.update({
            nome,
            email,
            senha: novaSenhaAtualizada,
            apresentacao
        },{
            where: {
                id
            }
        })

        const psicologoAtualizado = await Psicologos.findByPk(id);
        res.status(200).json(psicologoAtualizado);
    }
        catch(error) {
        console.error("Erro no servidor");
        console.log(error);
        res.status(500).json('Erro no servidor')
}
},
    deletarPsicologo : async (req, res) => {
        try{
        const { id } = req.params

        const psicologoExiste = await Psicologos.findByPk(id)

        if(!psicologoExiste) {
            return res.status(404).json('Id não encontrado')
        }

        const psicologoDeletado = await Psicologos.destroy({
            where: {
                id
            }
        })

        return res.status(204).json()


    } catch(error) {
        console.error("Erro no servidor");
        console.log(error);
        res.status(500).json('Erro no servidor')
    }
    }
}

module.exports = psicologoController
