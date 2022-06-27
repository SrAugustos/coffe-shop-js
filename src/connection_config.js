const mongoose = require('mongoose')
const db = 'mongodb://localhost/coffeeshop'
const conectionParameters = { useNewUrlParser: true, useUnifiedTopology: true, }
this.connect = mongoose.connect(db, conectionParameters).then(() => { console.log('Welcome to coffeeshop app!!\nTo se the comands acesse \'/\'') }).catch((e) => { console.error(e) })
