const Cliente = require("../../models/Cliente")

module.exports = async (req, res) => {
    const e = req.body.email
    const email = e.toLowerCase()

    const { cpf } = req.body

    if(await Cliente.findOne({ email })) {
        return res.status(400).json({ message: 'O email informado está cadastrado para outra conta' })
    }

    if(await Cliente.findOne({ cpf })) {
        return res.status(400).json({ message: 'O cpf informado está cadastrado para outra conta' })
    }

    let usuario = new Cliente({...req.body})
    const senha = usuario.cpf.replaceOne('.', '').replace('-', '')
    usuario.senha = await usuario.createHash(senha)
    usuario.email = email
    await usuario.save()

    return res.status(204).send()
}
