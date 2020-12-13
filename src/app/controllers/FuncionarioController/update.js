module.exports = async (req, res, Model) => {
    try {
        const { id } = req.params
        const { senha } = req.body
        let usuario = await Model.findByIdAndUpdate(id, req.body)

        if(senha !== undefined) {
            usuario.senha = await usuario.createHash(senha)
            console.log('nova senha', usuario.senha)
            await usuario.save()
            return res.status(200).send()
        }

        return res.status(200).send()

    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}
