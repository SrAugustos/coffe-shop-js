const productsServices = require('../services/products_services')


module.exports = {

    getProducts: async (req, res) => {
        try {
            const products = await productsServices.getProducts()
            res.json(products)
        }

        catch (err) {
            res.json({ message: err })
        }
    },
    getOneProduct: async (req, res) => {
        try {
            const product = productsServices.getOneProduct(req.params.id)
            res.json(product)
        } catch (err) { res.json({ message: err }) }
    },
    createProduct: async (req, res) => {
        try {
            productsServices.createProduct(req.body)
            res.json({ ProductCreated: true })
        } catch (err) { res.json({ message: err }) }
    },
    updateProduct: async (req, res) => {
        try {
            const product = productsServices.updateProduct(req.params.id, req.body)
            res.json(product)
        } catch (err) { res.json({ message: err }) }
    },
    deleteProduct: async (req, res) => {
        try {
            productsServices.deleteProduct(req.params.id)
            res.json({ message: 'Product deleted successfully' })
        } catch (err) { res.json({ message: err }) }
    }

}