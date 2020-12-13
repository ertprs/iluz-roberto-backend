const mongoose = require('mongoose')

const contratoSchema = new mongoose.Schema({
    cliente: { type: Object, default: { nome: '' } },
    cliente_id: String,
    responsavel: Object,
    responsavel_id: String,
    status: { type: String, default: 'ativo' }, // orçamento -> venda -> montagem -> ativo
    data_ativacao: { type: String, default: Date.now },
    validade: String,
    descricao: String,
    endereco: String,
    preco: String,
    metodo_pagamento: String,
    dinheiro: Boolean,
    debito: Boolean,
    garantia: String,
    contato: String,
    valor: String,
    credito: Boolean,
    andamento: Array,
    data: { type: String, default: Date.now },
})

module.exports = mongoose.model('contrato', contratoSchema)
