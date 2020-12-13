const model = require("../../models/Financeiro")

class Middle {
    list = async (req, res) => await require('../BigData').list(req, res, model, req.body.filter !== undefined ? req.body.filter : {})
    store = async (req, res) => await require('../BigData').store(req, res, model)
    show = async (req, res) => await require('../BigData').show(req, res, model)
    update = async (req, res) => await require('../BigData').update(req, res, model)
    destroy = async (req, res) => await require('../BigData').destroy(req, res, model)
}

module.exports = new Middle()
