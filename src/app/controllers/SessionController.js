const User = require('../models/Funcionario')
const Cliente = require('../models/Cliente')

class SessionController {
  async store (req, res) {
    const { senha } = req.body
    const email = req.body.email.toLowerCase()

    let user = await User.findOne({ email }).select('+senha')

    if (!user) {
        user = await User.findOne({ nickname: email }).select('+senha')
        if(!user) {
             user = await User.findOne({ cpf: email }).select('+senha')
            if(!user) {
                return res.status(400).json({ message: 'Usuário não encontrado' })
            }
        }

    }

    if (!await user.compareHash(senha)) {
      return res.status(400).json({ message: 'Senha inválida' })
    }

    return res.json({ user, token: User.generateToken(user), tipo: 'cliente' })
  }

  async by_token(req, res) {
    const token_ = req.body.token

    let u = await User.findOne({ token: token_ })
    let c = await Cliente.findOne({ token: token_ })
    let user = null
    let token = ''
    let tipo = ''

    if (!u && !c) {
      return res.status(400).json({ message: 'Dispositivo não credenciado' })
    }

    if(!user && !!cliente) {
      user = c
      token = Cliente.generateToken(cliente)
      tipo = 'cliente'
    }
    
    if(!!user && !cliente) {
      user = u
      token = User.generateToken(cliente)
      tipo = 'funcionario'
    }

    return res.json({ user, token, tipo })
  }
}

module.exports = new SessionController()
