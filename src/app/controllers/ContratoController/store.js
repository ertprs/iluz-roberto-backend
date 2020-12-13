
module.exports = async (req, res, Model) => {
    try {
        await Model.create(req.body)
        return res.status(200).send()
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
