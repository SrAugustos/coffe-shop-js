const readline = require('readline')
const { findOne } = require('../models/user_model')

const user = require('../models/user_model')

var userLog = {
    username: '',
    log: false,
}

//Callback functions
const findUserName = name => user.findOne({ username: name })
const findPassword = password => user.findOne({ password: password })
const createAccount = (name, password) => new user({
    username: name, password: password, adm: false
})
//Main functions

module.exports = {
    findUserName: findUserName,
    findPassword: findPassword,
    createAccount: createAccount,
    userLog: userLog
}




