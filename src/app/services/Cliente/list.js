const Cliente = require('../../models/Cliente')

module.exports = async function(req, res) {
    try {

        const clientes = await Cliente.find({})
        return res.json(clientes)

    } catch (error) {

        return res.status(400).send({ message: error.message })

    }
}
