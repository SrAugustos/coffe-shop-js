const mongoose = require('mongoose')
const readline = require('readline')
const order = require('./../models/order_model')
var cart = []
const createOrder = user => new order({
    date: Date.now(),
    Products: cart,
    user: user
})
const products = require('./../models/product_model')
//Callback Functions
const seeProducts = (product) => product.map(p => console.log(`${p.index}- ${p.productName}\nPrice:$${p.productValue}\n${p.productDescription}`))
const addToCart = (product) => cart.push(product)

//Main functions
function getProduct() {
    products.find({}).exec(function (err, products) {
        if (err) { console.error(err) }
        if (products) {
            seeProducts(products)
        }
    })
}


//const viewProducts = (p) => console.log(`There is the products ${p.productName}`)
module.exports = {
    seeProducts: seeProducts,
    addToCart: addToCart,
    getProduct: getProduct,
    createOrder: createOrder,
    products: products,
    cart: cart,

}
