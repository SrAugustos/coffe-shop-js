const user = require('../models/user_model')
const create = (name, password) => new user({
    username: name, password: password, adm: false
})
const userStore = require('./../store/user_store')

module.exports = function (rl) {
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
                    userStore.user.username = user.username
                userStore.user.log = true
            }
        });
    }))
}
