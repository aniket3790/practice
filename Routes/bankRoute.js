const {getBank,postBank,putBank,deleteBank} = require('../controllers/bankController')

const route = require('express').Router()

route.get('/',getBank)
route.post('/',postBank)

route.put('/:id',putBank)
route.delete('/id',deleteBank)

module.exports = route