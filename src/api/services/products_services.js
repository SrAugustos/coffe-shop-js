const productRepository = require('../respository/products_repository')
module.exports = {

    getProducts: () => ProductsRepository.getProducts(),
    getOneProduct: async (id) => productRepository.getOneProduct(id),
    createProduct: async (productParameters) => {
        const { productName, productValue, productDescription } = productParameters
        const product = {
            productName, productValue, productDescription
        }
        productRepository.createProduct(product)
    },
    updateProduct: async (id, productParameters) => {
        const { productName, productValue, productDescription } = productParameters
        const product = {
            productName, productValue, productDescription
        }
        productRepository.updateProduct(id, product)
        return product
    },
    deleteProduct: async id => productRepository.deleteProduct(id)
}