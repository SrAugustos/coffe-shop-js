const Products = require('./../models/product_model')



module.exports = async res => {
    try {
        const products = await Products.find({})
        res.json(products)
    } catch (error) {

    }
};