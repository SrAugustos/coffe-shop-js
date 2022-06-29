const buyService = require('../services/buy_service')
const repository = require('../respository/products_repository')

module.exports = {
    buy: async (req, res) => {
        try {
            buyService.buy(req.body.products)
            res.json({ order: "Created order" })
        } catch (err) {
            res.json({ message: err })
        }
    },
    repository: async (req, res) => {
        try {
            const products = await repository.repository()
            res.json(products)
        }

        catch (err) {
            res.json({ message: err })
        }
    }
}