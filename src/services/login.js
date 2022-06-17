const readline = require('readline')
const { findOne } = require('./../models/user_model')

const user = require('./../models/user_model')

var userLog = {
    username: '',
    log: false,
}

//Callback functions
const findUserName = name => user.findOne({ username: name })
const findPassword = password => user.findOne({ password: password })
const create = (name, password) => new user({
    username: name, password: password, adm: false
})
//Main functions
function login(rl) {
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
                    userLog.username = user.username
                    userLog.log = true
                } else return console.error('Password incorrect try again')
            })
        }))
}
function createUser(rl) {
    let name; let password;
    return new Promise((resolve) => {
        rl.question('User: ', res => {
            name = res
            resolve()
        })
    }).then(() => rl.question('Password: ', res => {
        password = res
        create(name, password).save(function (err) {
            if (err) return handleError(err);
            else {
                console.log('User created successfully'),
                    userLog.username = user.username
                userLog.log = true
            }
        });
    }))
}

module.exports = {
    logar: login,
    create: createUser,
    inf: userLog
}




