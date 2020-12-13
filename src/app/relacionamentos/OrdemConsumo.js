const mongoose = require("mongoose")

const ConsumoSchema = new mongoose.Schema({
    ordem_id: String,
    ordem: Object,
    quantidade_usada: Number,
    material_id: String,
    material: Object
})

module.exports = mongoose.model('consumo', ConsumoSchema)
