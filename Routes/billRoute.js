const {getBill,postBill,putBill,deleteBill} = require('../controllers/billingController')

const route = require('express').Router()

route.get('/',getBill)
route.post('/',postBill)

route.put('/:id',putBill)
route.delete('/id',deleteBill)

module.exports = route