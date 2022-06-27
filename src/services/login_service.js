const userModel = require('./../models/user_model')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'coffeesecret'
module.exports = (req, res) => {

    try {
        userModel.findOne({ email: req.body.email, password: req.body.password }).exec((err, user) => {
            if (err) return console.error(err)
            if (user) {

                console.log(user._id)
                const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: 300 })
                res.json({ token })
            }
        })
    }
    catch (err) { res.status(401).end(); }

}