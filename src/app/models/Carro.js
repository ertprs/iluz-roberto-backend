const mongoose = require("mongoose")

const carroSchema = new mongoose.Schema({
    nome: String,
    modelo: String,
    placa: String,
    status: String,
    situacao: String,
    quilometragem_atual: String
})

module.exports = mongoose.model('carro', carroSchema)
