const express = require('express')
const router = express.Router();
const orderModel = require('./../models/order_model')
const userStore = require('./../store/user_store')
require('dotenv')


module.exports = async (req, res,) => {
    const { date, products } = req.body
    const name = userStore.username
    const order = {
        date,
        products,
        name
    }
    try {
        await orderModel.create(order)
    } catch (error) {

    }

}