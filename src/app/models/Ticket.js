const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    usuario_id: String,
    usuario: Object,
    assunto: String,
    mensagem: String,
    data: { type: Date, default: Date.now },
    status: { type: String, default: 'pendente' }
})

module.exports = mongoose.model('ticket', ticketSchema)
