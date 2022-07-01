const userModel = require('../models/user_model')
module.exports = {
    login: (email, password) => {
        const user = userModel.findOne({ email: email, password: password })
        return user
    },
    createAccount: async (user) => {
        await userModel.create(user)
    }
}