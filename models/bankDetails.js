const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    accountNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('bank',bankSchema)