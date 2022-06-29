const userModel = require('../models/user_model')

const jwt = require('../../utils/jason_web_token')
module.exports = {

    login: async (email, password) => {
            userModel.findOne({ email: email, password: password }).exec((err, user) => {
            if (err) return console.error(err)
            if (user) {
                console.log(user._id)
                const token = jwt(user._id)
                return token
            }
        })
    },
}   