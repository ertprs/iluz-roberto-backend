const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    ordem_id: String,
    funcionario: Object,
    funcionario_id: String,
})

module.exports = new Mongoose.model('ordem-funcionario', MaterialSchema)
