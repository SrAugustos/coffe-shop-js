const express = require('express')
const router = express.Router();
const orderModel = require('./../models/order_model')



module.exports = {
    buy: async productsParams => {
        const { products } = productsParams
        var date = Date.now()
        const order = {
            date,
            products,
        }
        await orderModel.create(order)
    }
}