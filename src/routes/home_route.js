module.exports = function (app) {
    app.get('/', function (_, res) {
        res.send(console.log('Welcome!!\nTo login access /login\nTo create an account access /createUser\nTo enter the shop access /shop'))
    })
}
