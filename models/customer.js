const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('customer',customerSchema)