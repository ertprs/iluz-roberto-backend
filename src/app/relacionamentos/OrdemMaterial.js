const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    ordem_id: String,
    material: Object,
    quantidade_solicitada: Number,
    quantidade_utilizada: { type: Number, default: 0},
    material_id: String
})

module.exports = new Mongoose.model('ordem-material', MaterialSchema)
