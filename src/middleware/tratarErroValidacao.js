const { ValidationError } = require('express-validation')

tratarErroValidacao = (error, req, res, next) => {
    if(error instanceof ValidationError) {
        return res.status(400).json('Preencha corretamente todos os campos!')
    }

    if(error.name == "UnauthorizedError") {
        return res.status(401).json(error)
    }
    
    return res.status(500).json(error)
}

module.exports = tratarErroValidacao