const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    quantidade: Number,
    nome: String,
    descricao: String,
    marca: String
})

module.exports = new Mongoose.model('material', MaterialSchema)
