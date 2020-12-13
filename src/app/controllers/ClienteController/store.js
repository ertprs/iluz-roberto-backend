const Cliente = require("../../models/Cliente")

module.exports = async (req, res) => {
    const { cpf, senha } = req.body


    //if(await Cliente.findOne({ cpf })) {
    //    return res.status(400).json({ message: 'O cpf informado está cadastrado para outra conta' })
    //}

    let usuario = new Cliente({...req.body})
    usuario.email = cpf
    usuario.senha = await usuario.createHash(senha)
    await usuario.save()

    return res.status(204).send()
}
