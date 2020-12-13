module.exports = async function(req, res, Model) {
    try {
        await Model.findByIdAndDelete(req.params.id)
        return res.status(200).send()
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
