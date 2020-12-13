const model = require("../../models/Cliente")

class Middle {
    list = async (req, res) => await require('./list')(req, res, model)
    store = async (req, res) => await require('./store')(req, res, model)
    show = async (req, res) => await require('./show')(req, res, model)
    update = async (req, res) => await require('./update')(req, res, model)
    destroy = async (req, res) => await require('./destroy')(req, res, model)
}

module.exports = new Middle()
