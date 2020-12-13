const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    ordem_id: String,
    carro: Object,
    carro_id: String,
})

module.exports = new Mongoose.model('ordem-carro', MaterialSchema)
