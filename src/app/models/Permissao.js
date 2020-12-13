const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    mapa: Boolean,
    executar_os: Boolean,
    os: Boolean,
    equipamento: Boolean,
    material: Boolean,
    funcionario: Boolean,
    carro: Boolean,
    cliente: Boolean,
    contrato: Boolean,
    financeiro: Boolean,
    posvenda: Boolean,
    permissao: Boolean
})

module.exports = mongoose.model('permissao', schema)
