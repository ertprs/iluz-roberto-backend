module.exports = async (req, res, Model) => {
    try {
        const dados = await Model.findByIdAndUpdate(req.params.id, req.body)
        return res.json(dados)

    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}
