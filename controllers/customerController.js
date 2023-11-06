const Customer = require('../models/customer')

// get
exports.getCustomer = async (req, res) => {
    try {
        const data = await Customer.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post
exports.postCustomer = async (req, res) => {
    try {
        const data = await Customer.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put
exports.putCustomer = async (req,res)=>{
    try {
        const data = await Customer.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteCustomer = async (req,res)=>{
    try {
        const data = await Customer.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}