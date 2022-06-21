const createAccountController = require('../controllers/user_create_account_controller')
module.exports = function (rl, app) {
    app.get('/createUser', function (req, res) {
        res.send(createAccountController(rl))
    })
}
