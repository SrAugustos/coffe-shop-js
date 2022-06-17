const mongoose = require('mongoose')
const Schema = mongoose.Schema
var productSchema = new Schema({
    productName: String,
    productValue: Number,
    productDescription: String,
    index: Number,
})
module.exports = mongoose.model('Product', productSchema)