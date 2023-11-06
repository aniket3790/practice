const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./Routes/userRoute')
const billRoute = require('./Routes/billRoute')
const bankRoute = require('./Routes/bankRoute')
const customerRoute = require('./Routes/customerRoute')
const productRoute = require('./Routes/productRoute')
const user = require('./models/user')
const billing = require('./models/billing')
const bankDetails = require('./models/bankDetails')
const customer = require('./models/customer')
const product = require('./models/product')
const jwt = require('jsonwebtoken')
const cors = require('cors')

require('dotenv/config')

const app = express()
// middleware
app.use(express.json())
app.use(cors())
// default
app.get('/',(req,res)=>{
    res.send('user info')
})
// main
app.use('/api/user',userRoute)
app.use('/api/bill',billRoute)
app.use('/api/bank',bankRoute)
app.use('/api/customer',customerRoute)
app.use('/api/product',productRoute)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()

app.listen(process.env.PORT || 5000) 