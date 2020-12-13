const User = require('../models/Cliente')

class SessionController {
  async store (req, res) {
    const { cpf } = req.body

    let user = await User.findOne({ cpf })

    if (!user) {
        user = await User.findOne({ cnpj: cpf })
        if(!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' })
        }
    }

    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
