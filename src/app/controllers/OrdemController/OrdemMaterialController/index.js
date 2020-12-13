const model = require("../../../relacionamentos/OrdemMaterial")

class Middle {
    listAll = async (req, res) => await require('../../BigData').list(req, res, model, {})
    list = async (req, res) => await require('../../BigData').list(req, res, model, { ordem_id: req.params.id })
    store = async (req, res) => await require('../../BigData').store(req, res, model)
    update = async (req, res) => await require('../../BigData').update(req, res, model)
    destroy = async (req, res) => await require('../../BigData').destroy(req, res, model)
}

module.exports = new Middle()
