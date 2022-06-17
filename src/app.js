
const mongoose = require('mongoose');
var user = require('./models/user_model')
var connect = require('./services/db_conection');
var login = require('./services/login');
const getProduct = require('./services/buy_products')
const readline = require('readline')

const products = require('./models/product_model')
const order = require('./models/order_model')


//Creating the interface to be able to enter command in the terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Using readline to control the application
rl.on('line', (res) => {

    if (res === '1') {
        console.log('You are a user')
        login.logar(rl);

    } if (res === '2') {
        console.log('lets go to create a cont')
        login.create(rl)
    } if (res === '3') {
        console.log('Coffees')
        getProduct.products(products, rl)
    } if (res === '4') {
        if (login.inf.log) return console.log(`The user:${login.inf.username} is loged`)
        else return console.log('Inst users loged')
    }
    if (res === 'buy') {
        getProduct.buy(login.inf.log, rl, login.inf.username)
    }
    if (res === 'help') {
        console.log('Enter the command\'s index to use it\n1-Login\n2-Create a cont\n3-To see the products\n4-To see the User information')
    }

});


