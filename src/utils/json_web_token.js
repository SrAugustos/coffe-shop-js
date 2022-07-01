const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = (id) => {
    var token = jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 300 })
    return token
}