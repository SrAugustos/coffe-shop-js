
const loginController = require('./../controllers/user_login_controller')
module.exports = function (rl, app) {
    app.get('/login', function (req, res) {
        res.send(loginController(rl))
    })


}