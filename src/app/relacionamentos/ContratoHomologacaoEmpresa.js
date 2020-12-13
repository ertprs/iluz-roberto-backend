const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    contrato_id: String,
    url: String,
    documento: String,
    cliente: Boolean,
    created_at: { type: Date, default: Date.now }
})

module.exports = new Mongoose.model('contrato-homologacao-empresa', MaterialSchema)
