const express = require('express')
const router = express.Router()
const userModel = require('./../models/user_model')


module.exports = {
    createUser: async userParams => {
        const { email, password } = userParams
        const user = {
            email, password
        }

        await userModel.create(user)


    }
}