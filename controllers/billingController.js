const Bill = require('../models/billing')

// get
exports.getBill = async (req, res) => {
    try {
        const data = await Bill.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message })
    }
}

// post
exports.postBill = async (req, res) => {
    try {
        const data = await Bill.create(req.body)
        return res.json({ errors:false, data:data })
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message })
    }
}

// put
exports.putBill = async (req,res)=>{
    try {
        const data = await Bill.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteBill = async (req,res)=>{
    try {
        const data = await Bill.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}