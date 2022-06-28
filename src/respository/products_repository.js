const Products = require('./../models/product_model')



module.exports = {
    repository: async () => {
        const products = await Products.find({})
        return products
    }
}