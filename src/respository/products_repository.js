const Products = require('./../models/product_model')



module.exports = {
    repository: async (req, res) => {
        try {
            const products = await Products.find({})
            res.json(products)
        } catch (error) {
            res.json({ error: error })
        }
    }
}