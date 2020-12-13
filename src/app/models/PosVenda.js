const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cliente_id: String,
    cliente: Object,
    contrato_id: String,
    visita: String,
    data: String,
    status: { type: String, default: "pendente" },
    resultado: String,
    created_ad: { type: Date, default: Date.now }
})

module.exports = mongoose.model('pos-venda', schema)
