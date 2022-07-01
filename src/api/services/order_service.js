const orderRepository = require('./../respository/order_repository')
module.exports = {
    createOrder: async productsRequest => {
        const { products } = productsRequest
        var date = Date.now()
        const order = {
            date,
            products,
        }
        orderRepository.createOrder(order)
    },
    getOrder: () => orderRepository.getOrder()
    ,
    updateOrder: (id, productsRequest) => {
        var date = Date.now()
        const order = {
            date, productsRequest
        }
        orderRepository.updateOrder(id, order)
        return order
    },
    deleteOrder: (id) => {
        orderRepository.deleteOrder(id)
    },
}
