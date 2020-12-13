module.exports = async function(req, res, model) {
    try {
        const carro = await model.findByIdAndUpdate(req.params.id, req.body)
        return res.json(carro)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
