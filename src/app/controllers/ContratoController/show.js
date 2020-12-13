module.exports = async function(req, res, Model) {
    try {
        const dados = await Model.findById(req.params.id)
        return res.json(dados)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
