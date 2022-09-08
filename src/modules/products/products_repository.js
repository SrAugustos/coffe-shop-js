const productModel = require('./../models/product_model')



module.exports = {
    getProducts: async () => {
        const products = await productModel.find()
        return products
    },
    getOneProduct: async (id) => {
        const product = await productModel.findOne({ _id: id })
        return product
    },
    createProduct: async (product) => {
        await productModel.create(product)
    },
    updateProduct: async (id, product) => { 
        await productModel.findByIdAndUpdate(id, product)
        await productModel.save()
    },
    deleteProduct: async (id) => { 
        await productModel.findByIdAndDelete(id)
    }
}