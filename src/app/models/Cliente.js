const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    cep: String,
    bairro: String,
    numero_casa: String,
    email: String,
    contatos: String,
    block: { type: Boolean, default: true },
    obs: String,
    cpf: { type: String, unique: true },
    cnpj: { type: String, default: '0' },
    block: { type: Number, default: 0 },
    senha: { type: String, select: false },
    criadoEm: { type: Date, default: Date.now }
});

UsuarioSchema.methods = {
  compareHash(senhaAComparar) {
    return bcrypt.compare(senhaAComparar, this.senha);
  },

  async createHash(senhaACriar) {
    const senha = await bcrypt.hash(senhaACriar, 8);
    return senha
  },
}

UsuarioSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};
module.exports = mongoose.model("cliente", UsuarioSchema);
