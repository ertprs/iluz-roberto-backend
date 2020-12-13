const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    endereco: {
        type: String
    },
    cep: {
        type: String
    },
    bairro: {
        type: String
    },
    numero_casa: {
        type: String
    },
    contato: {
        type: String
    },
    cpf: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    permissao_id: String,
    block: {
        type: Number,
        default: 0
    },
    senha: {
        type: String,
        select: false
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
    plataforma: String,
    token: String,
    instance_id: String,
    activateAccountToken: {
        type: String
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    },
});

UsuarioSchema.methods = {
  compareHash(senhaAComparar) {
    return bcrypt.compare(senhaAComparar, this.senha);
  },

  async createHash(senhaACriar) {
    const senha = await bcrypt.hash(senhaACriar, 8);
    return senha
  }
};

UsuarioSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};

module.exports = mongoose.model("funcionario", UsuarioSchema);
