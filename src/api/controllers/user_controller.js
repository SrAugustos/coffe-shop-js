const userService = require('../services/user_service')


module.exports = {
    login: async (req, res) => {
        try {
            const token = await userService.login(req.body.email, req.body.password)
            res.json(token)
        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    },
    createuser: async (req, res) => {
        try {
            userService.createUser(req.body)
            res.json({ UserCreated: true })

        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    }
}