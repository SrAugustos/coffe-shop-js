const readline = require('readline')
const { findOne } = require('../models/user_model')

const userStore = require('./../store/user_store')

const user = require('./../models/user_model')

//Callback functions
const findUserName = name => user.findOne({ username: name })
const findPassword = password => user.findOne({ password: password })

//Main functions



module.exports = function (rl) {
    return new Promise((resolve) => {
        rl.question('User: ', res => {
            findUserName(res).exec(function (err, user) {
                if (err) {
                    console.error(err)
                }
                if (user) {

                    resolve()
                }
                else return console.error('User incorrect try again')
            })
        })
    }).then(() =>
        rl.question('Password: ', res => {
            findPassword(res).exec(function (err, user) {
                if (err) {
                    console.error(err)
                }
                if (user) {
                    console.log(`Welcome user ${user.username}`)
                    userStore.user.username = user.username
                    userStore.user.log = true
                } else return console.error('Password incorrect try again')
            })
        }))
}
