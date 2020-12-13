module.exports = async function(req, res, model) {
    try {
        await model.findByIdAndDelete(req.params.id)
        return res.status(204).send()
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
