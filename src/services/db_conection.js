const mongoose = require('mongoose')
const db = 'mongodb://localhost/coffeeshop'
const login = require('./login')
const conectionParameters = { useNewUrlParser: true, useUnifiedTopology: true, }
this.connect = mongoose.connect(db, conectionParameters).then(() => { console.log('Welcome to coffeeshop app!!\nTo se the comands isert help in console') }).catch((e) => { console.error(e) })
