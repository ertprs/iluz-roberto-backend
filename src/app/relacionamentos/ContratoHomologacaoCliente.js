const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    contrato_id: String,
    url: String,
    documento: String,
})

module.exports = new Mongoose.model('contrato-homologacao-cliente', MaterialSchema)
