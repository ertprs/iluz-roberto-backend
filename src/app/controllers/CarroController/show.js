module.exports = async function(req, res, model) {
    try {
        const dados = await model.findById(req.params.id)
        return res.json(dados)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
