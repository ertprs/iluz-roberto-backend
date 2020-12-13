const model = require("../../../relacionamentos/OrdemConsumo")

class Middle {
    list = async (req, res) => await require('../../BigData').list(req, res, model, { material_id: req.params.id })
    store = async (req, res) => await require('../../BigData').store(req, res, model)
    destroy = async (req, res) => await require('../../BigData').destroy(req, res, model)
}

module.exports = new Middle()
