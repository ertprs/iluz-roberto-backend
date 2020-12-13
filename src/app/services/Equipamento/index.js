class Middle{
    list = async (req, res) => require('./list')(req, res)
    store = async (req, res) => require('./store')(req, res)
    show = async (req, res) => require('./show')(req, res)
    update = async (req, res) => require('./update')(req, res)
    destroy = async (req, res) => require('./destroy')(req, res)
}
module.exports = new Middle()
