const mongoose = require('mongoose')

const billingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    employee:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('billing',billingSchema)