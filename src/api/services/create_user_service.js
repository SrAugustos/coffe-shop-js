const userModel = require('../api/models/user_model')
module.exports = {
    createUser: async userRequest => {
        const { email, password } = userRequest
        const user = {
            email, password
        }

        await userModel.create(user)


    }
}