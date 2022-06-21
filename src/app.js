var connect = require('./services/db_conection');
const readline = require('readline')
const express = require('express')
const consign = require('consign')
const app = express();

app.listen(27017, function () { console.log('listening on port 27017') });

var userLog = {
    username: '',
    log: false,
}
//Creating the interface to be able to enter command in the terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const homeRoute = require('./routes/home_route')(app)
const loginRoute = require('./routes/login_route')(rl, app)
const shopRoute = require('./routes/shop_route')(rl, app)
const createAccount = require('./routes/create_account_route')(rl, app)



