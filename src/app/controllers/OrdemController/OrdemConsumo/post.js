module.exports = async function (req, res, model) {
    const dados = req.body.materiais_utilizados

    dados.map(async dado => {
        await model.create(dado)
    })
}
