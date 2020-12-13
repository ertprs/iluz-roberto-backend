const Mongoose = require('mongoose')

const EquipamentoSchema = new Mongoose.Schema({
    nome: String,
    descricao: String,
    marca: String,
    modelo: String,
    status: String,
    aquisicao: String
})

module.exports = new Mongoose.model('equipamento', EquipamentoSchema)
