const jwt = require('../../utils/json_web_token')
const repository = require('../respository/user_repository')
module.exports = {

    login: async (email, password) => {
            const user = repository.login(email, password)
            if (user) {
                console.log(user._id)
                const token = jwt(user._id)
                return token
            }
        },
        createUser: async userRequest => {
            const { email, password } = userRequest
            const user = {
                email, password
            }
            repository.createAccount(user)
        }
    }
