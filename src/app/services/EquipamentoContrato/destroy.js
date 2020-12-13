import Cliente from '../../models/Cliente'

module.exports = async function(req, res) {
    try {
        await Cliente.findByIdAndDelete(req.params.id)
        return res.status(200).send()
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao excluir, tente novamente' })
    }
}
