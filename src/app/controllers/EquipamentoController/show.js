module.exports = async function(req, res, Model) {
    try {
        const dado = await Model.findById(req.params.id)
        return res.json(dado)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
