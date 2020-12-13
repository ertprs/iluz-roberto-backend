module.exports = async function(req, res, model) {
    try {
        const dados = await model.find()
        return res.json(dados)

    } catch (error) {

        return res.status(400).send({ message: error.message })

    }
}
