const Mongoose = require('mongoose')

const EquipamentoSchema = new Mongoose.Schema({
    descricao: String,
    origem: String, // entrada ou saída
    valor: String,
    created_at: { type: Date, default: Date.now }
})

module.exports = new Mongoose.model('financeiro', EquipamentoSchema)
