const userModel = require('./../models/user_model')
const jwt = require('jsonwebtoken')

const secret = require('./../config/auth.json')

module.exports = {

    login: async (email, password, res) => {


        userModel.findOne({ email: email, password: password }).exec((err, user) => {
            if (err) return console.error(err)
            if (user) {
                console.log(user._id)
                const token = jwt.sign({ userId: user._id }, secret.secret, { expiresIn: 300 })
                res.json({ token: token })
            }
        })
    },


}