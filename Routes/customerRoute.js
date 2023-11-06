const {getCustomer,postCustomer,putCustomer,deleteCustomer} = require('../controllers/customerController')

const route = require('express').Router()

route.get('/',getCustomer)
route.post('/',postCustomer)

route.put('/:id',putCustomer)
route.delete('/id',deleteCustomer)

module.exports = route