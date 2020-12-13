class BigData {
    list = async (req, res, Model, filter) => {
        try {
            const dados = await Model.find(filter)
            return res.json(dados)
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }

    store = async (req, res, Model) => {
        try {
            const dados = await Model.create(req.body)
            return res.json(dados)
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }
}

module.exports = new BigData()
