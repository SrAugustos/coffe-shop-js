const orderModel = require('./../models/order_model')
module.exports = {
    buy: async productsRequest => {
        const { products } = productsRequest
        var date = Date.now()
        const order = {
            date,
            products,
        }
        await orderModel.create(order)
    }
}