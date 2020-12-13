const Carro = require('../../models/Carro')

module.exports = async (req, res) => {
    try {
        await Carro.create(req.body)
        return res.status(204).send()
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
