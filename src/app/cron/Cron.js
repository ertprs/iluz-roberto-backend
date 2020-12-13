const Contrato = require('../models/Contrato')
const Funcionario = require('../models/Funcionario')
const PosVenda = require('../models/PosVenda')
const PushNotification = require('../models/Funcionario')

const moment = require('moment-timezone')
const axios = require("axios")

class Cron {
    async Guard() {
        if(moment().tz('America/Belem') === '07:58') {
            const contratos = await Contrato.find()
            contratos.map(async item => {
                const dias2 = moment(item.data_ativacao, 'x').fromNow()
                const dia_visita = dias2.split(' ')
                const visita = parseInt(dia_visita[0]) / 15
                if(visita === 1 || visita === 2 || visita === 4 || visita === 6 || visita === 8 || visita === 10) {
                    let numero_visita = null
                    if(visita === 1) {
                        numero_visita = 1
                    }

                    if(visita === 2) {
                        numero_visita = 2
                    }

                    if(visita === 4) {
                        numero_visita = 3
                    }

                    if(visita === 6) {

                        numero_visita = 4
                    }
                    if(visita === 8) {
                        numero_visita = 5
                    }

                    if(visita === 10) {
                        numero_visita = 6
                    }

                    const data = {
                        cliente_id: item.cliente_id,
                        cliente: item.cliente,
                        contrato_id: item._id,
                        visita: numero_visita,
                        data: Date.now
                    }

                    await PosVenda.create(data)
                }
            })
        }

        if(moment().tz('America/Belem') === '08:00') {
            const pos_vendas = await PosVenda.find({ data: moment().tz('America/Belem').format('DD/MM/YYYY') })
            const usuarios_notificacoes = await PushNotification.find()

            usuarios_notificacoes.map(async usuario => {
                const user = await Funcionario.findById(usuario.usuario_id)
                const nome = user.nome.split(' ')
                const data_notificacao = {
                    notification: {
                        "title": "Pós Venda",
                        "body": `Bom dia ${nome[0]}, hoje há ${pos_vendas.length} para visita no pós venda, acesse a opção pós venda no seu menu!`
                    },
                    to: usuario.token
                }
                axios.post('https://fcm.googleapis.com/fcm/send', data_notificacao, { headers: { Authorization: 'Bearer AIzaSyBpVW06pzIWsrt1EBO3qphEAX2KuZD3oCs' } })
            } )
        }
    }
}

module.exports = new Cron()
