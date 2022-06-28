const jwt = require('jsonwebtoken')
const JWT_SECRET = 'coffeesecret'
module.exports = (req, res, next) => {
    const token = req.headers['x-access-token']
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).end()
        req.userId = decoded.userId
        next();
    })
}