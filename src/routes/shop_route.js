const shopController = require('./../controllers/shop_controller')
module.exports = function (rl, app) {
    app.get('/shop', function (req, res) {
        res.send(shopController(rl))
    })
}