const login = require('./../services/login_service')
const createuser = require('./../services/create_user_service')

module.exports = {
    login: async (req, res) => {
        try {
            login.login(req.body.email, req.body.password, res)

        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    },
    createuser: async (req, res) => {
        try {
            createuser.createUser(req.body)
            res.json({ UserCreated: true })

        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    }
}