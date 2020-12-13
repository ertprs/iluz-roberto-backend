const Cliente = require('../../models/Cliente')
const Contrato = require('../../models/Contrato')

module.exports = async function(req, res) {
    try {
        let cliente = await Cliente.findById(req.params.id)

        return res.json({
            ...cliente._doc,
            contrato: await Contrato.find({ cliente_id: req.params.id })
        })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
