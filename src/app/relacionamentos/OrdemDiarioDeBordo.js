const Mongoose = require('mongoose')

const EquipamentoSchema = new Mongoose.Schema({
    ordem_id: String,
    mensagem: String,
    created_at: { type: Date, default: Date.now }
})

module.exports = new Mongoose.model('ordem-diario-de-bordo', EquipamentoSchema)
