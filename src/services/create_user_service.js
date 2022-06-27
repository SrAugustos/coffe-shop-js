const express = require('express')
const router = express.Router()
const userModel = require('./../models/user_model')


module.exports = async (req, res) => {
    const { email, password } = req.body
    const user = {
        email, password
    }
    try {
        await userModel.create(user)
        console.log('created', user)


    }
    catch (err) {
        res.status(401).end();
    }
}