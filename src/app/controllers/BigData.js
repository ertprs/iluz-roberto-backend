class BigData {
    list = async (req, res, Model, filter) => {
        try {
            console.log("filter", filter)
            const dados = await Model.find(filter)
            console.log('dados', dados)
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

    show = async (req, res, Model) => {
        try {
            const dados = await Model.findById(req.params.id)
            return res.json(dados)
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }

    update = async (req, res, Model, payload) => {
        try {
            const dados = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json(dados)
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }

    destroy = async (req, res, Model) => {
        try {
            await Model.findByIdAndDelete(req.params.id)
            return res.status(200).send()
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }
}

module.exports = new BigData()
