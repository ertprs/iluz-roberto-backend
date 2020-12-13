module.exports = async (req, res, Model) => {
    try {
        const dado = await Model.findByIdAndUpdate(req.params.id, req.body)
        return res.json(dado)
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}
