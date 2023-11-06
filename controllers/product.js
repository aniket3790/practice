const Product = require('../models/product')

// get
exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post
exports.postProduct = async (req, res) => {
    try {
        const data = await Product.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put
exports.putProduct = async (req,res)=>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteProduct = async (req,res)=>{
    try {
        const data = await Product.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}