const Cliente = require('../../models/Cliente')
const Contrato = require('../../models/Contrato')

module.exports = async function(req, res) {
    try {
        const contratos = await Contrato.find({ cliente_id: req.params.id })
        const cliente = await Cliente.findById(req.params.id)

        return res.status(204).json(cliente,contratos)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
