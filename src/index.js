require('dotenv').config()
console.log(`${process.env.SECRET}`)
require('./connection_config');

const express = require('express')

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(3000, function () { console.log('listening on port 3000') });


const routes = require('./routes/routes')


app.use('/', routes)