const Cliente = require('../../models/Cliente')

module.exports = async (req, res) => {
    try {
        const { id } = req.params
        const { senha } = req.body
        let usuario = await Cliente.findByIdAndUpdate(id, req.body)

        if(senha !== undefined) {
            usuario.senha = await usuario.createHash(senha)
            await usuario.save()
            return res.status(200).send()
        }

        return res.status(200).send()

    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}
