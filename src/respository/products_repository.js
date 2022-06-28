const Products = require('./../models/product_model')



module.exports = {
    repository: async (res) => {
        const products = await Products.find({})
        res.json(products)
    }
}