const mongoose = require('mongoose')
const readline = require('readline')
const order = require('./../models/order_model')
var cart = []
const createOrder = user => new order({
    date: Date.now(),
    Products: cart,
    user: user
})
//Callback Functions
const seeProducts = (product) => product.map(p => console.log(`${p.index}- ${p.productName}\nPrice:$${p.productValue}\n${p.productDescription}`))
const addToCart = (product) => cart.push(product)
const seeCart = (cart) => {
    cart.map(p => console.log(` ${p.productName}, const: $${p.productValue}`))
    let sum = 0
    cart.forEach(p => sum += p.productValue)
    console.log(`Total: $${sum}`)
}
//Main functions
function getProduct(data, rl) {
    data.find({}).exec(function (err, products) {
        if (err) { console.error(err) }
        if (products) {
            seeProducts(products),
                rl.question('What drink do you want?\n', res => {
                    products.map(p => {
                        if (p.index === parseInt(res)) {
                            addToCart(p)
                            console.log('Your Cart')
                            seeCart(cart)
                            console.log('Press 3 to add another drink or type buy to complete the purchase')
                        }
                    });
                })
        }
    })
}
function buy(loged, rl, user) {

    if (loged) {
        seeCart(cart)
        rl.question('Do you want to complete the purchase? y or n\n', res => {
            if (res === 'y') {


                createOrder(user).save(function (err) {
                    if (err) return handleError(err)
                })
                console.log('Order created')
            }
        })
    } else return console.error('You must be logged')
}

//const viewProducts = (p) => console.log(`There is the products ${p.productName}`)
module.exports = {
    products: getProduct,
    buy: buy
}
