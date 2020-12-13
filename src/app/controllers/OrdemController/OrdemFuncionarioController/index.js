const model = require("../../../relacionamentos/OrdemFuncionario")

class Middle {
    list = async (req, res) => await require('../../BigData').list(req, res, model, { ordem_id: req.params.id })
    store = async (req, res) => await require('../../BigData').store(req, res, model)
    destroy = async (req, res) => await require('../../BigData').destroy(req, res, model)
}

module.exports = new Middle()
