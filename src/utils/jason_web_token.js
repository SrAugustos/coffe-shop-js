const jwt = require('jasonwebtoken');
const secret = require('./../config/auth.json')
module.exports = (id) => {
    var token = jwt.sign({ id: id }, secret.secret, { expiresIn: 300 })
    return token
}