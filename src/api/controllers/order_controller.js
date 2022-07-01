const orderService = require('./../services/order_service')
module.exports = {
    createOrder: async (req, res) => {
        try {
            orderService.CreateOrder(req.body.products)
            res.json({ order: "Created order" })
        } catch (err) {
            res.json({ message: err })
        }
    },
    getOrder: async (req, res) => {
        try {
            const order = await orderService.getOrder()
            res.json(order)
        } catch (err) {
            res.json({ message: err })
        }
    },
    updateOrder: async (req, res) => {
        try {
            const order  = orderService.updateOrder(req.params.id, req.body)
            res.json(order)
        } catch (err) { res.json({ message: err }) }
    },
    deleteOrder: async (req, res) => {
        try {
            orderService.updateOrder(req.params.id)
            res.json({ message: 'Delete Order' })
        }catch (err) { res.json({ message: err }) }
     },
} 