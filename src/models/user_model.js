const mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    username: String,

    password: String,

    adm: Boolean,
})

module.exports = mongoose.model('User', userSchema)
