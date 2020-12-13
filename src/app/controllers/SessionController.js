const User = require('../models/Funcionario')

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

    return res.json({ user, token: User.generateToken(user) })
  }

  async by_token(req, res) {
    console.log('receipt')
    const token = req.body.token

    let user = await User.findOne({ token: token })

    if (!user) {
      return res.status(400).json({ message: 'Dispositivo não credenciado' })
    }

    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
