const Mongoose = require('mongoose')

const EquipamentoSchema = new Mongoose.Schema({
    ordem_id: String,
    equipamento: Object,
    equipamento_id: String,
})

module.exports = new Mongoose.model('ordem-equipamento', EquipamentoSchema)
