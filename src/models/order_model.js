const mongoose = require('mongoose')
const Schema = mongoose.Schema

var orderSchema = new Schema({
    date: Date,
    products: [],
    user: String,

})
module.exports = mongoose.model('order', orderSchema)