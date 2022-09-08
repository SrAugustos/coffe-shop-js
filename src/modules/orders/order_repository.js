const orderModel = require('./../models/order_model')
export default orderRepository = {
    createOrder: async (order) => { await orderModel.create(order) },
    getOrder: async () => {
        const order = await orderModel.find()
        return order
    },
    updateOrder: async (id, order) => {
        await orderModel.findByIdAndUpdate(id, order)
        await orderModel.save()
    },
    deleteOrder: async (id) => { 
        await orderModel.findByIdAndDelete(id)
    },
}