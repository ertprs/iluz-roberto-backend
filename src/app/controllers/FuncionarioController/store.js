module.exports = async (req, res, Model) => {
    const e = req.body.email
    const senha = req.body.senha
    const email = e.toLowerCase()

    const { cpf } = req.body

    if(await Model.findOne({ email })) {
        return res.status(400).json({ message: 'O email informado está cadastrado para outra conta' })
    }

    if(await Model.findOne({ cpf })) {
        return res.status(400).json({ message: 'O cpf informado está cadastrado para outra conta' })
    }

    let usuario = new Model({...req.body})
    usuario.senha = await usuario.createHash(senha)
    usuario.email = email
    await usuario.save()

    return res.status(204).send()
}
