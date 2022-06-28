const mongoose = require('mongoose')
const Schema = mongoose.Schema

var orderSchema = new Schema({
    date: Date,
    products: [],


})
module.exports = mongoose.model('order', orderSchema)