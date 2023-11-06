const {getUser,register,login,putUser,deleteUser} = require('../controllers/userController')
const auth = require('../middleware/auth')
const route = require('express').Router()

route.get('/',getUser)
route.post('/',register)
route.post('/login',login)
route.put('/:id',putUser)
route.delete('/id',deleteUser)

module.exports = route