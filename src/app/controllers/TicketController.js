const Ticket = require('../models/Ticket')
const Usuario = require('../models/Cliente')

class TicketController {
    async self (req, res) {
        try {
            const tickets = await Ticket.find({ usuario_id: req.userId })
            return res.json(tickets)
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao carregar tickets, tente novamente', erro: error })
        }
    }

    async index (req, res) {
        try {
            const tickets = await Ticket.find()
            return res.json(tickets)
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao carregar tickets, tente novamente', erro: error })
        }
    }

    async show (req, res) {
        try {
            const { id } = req.params
            console.log('id', id)
            const ticket = await Ticket.findById(id)
            return res.json(ticket)
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao carregar tickets, tente novamente', erro: error })
        }
    }

    async store(req, res) {
        try {
            const usuario = await Usuario.findById(req.userId)

            const data = {
                usuario: usuario,
                usuario_id: usuario._id,
                assunto: req.body.assunto,
                mensagem: req.body.mensagem,
                status: 'pendente'
            }

            const tickets = await Ticket.create(data)
            return res.json(tickets)
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao salvar o ticket, tente novamente', erro: error })
        }
    }

    async update(req, res) {
        try {
            await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json({ message: 'sucesso' })
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao salvar o ticket, tente novamente', erro: error })
        }
    }
}

module.exports = new TicketController()
