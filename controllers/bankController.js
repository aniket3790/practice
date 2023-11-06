const Bank = require('../models/bankDetails')

// get
exports.getBank = async (req, res) => {
    try {
        const data = await Bank.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post
exports.postBank = async (req, res) => {
    try {
        const data = await Bank.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put
exports.putBank = async (req,res)=>{
    try {
        const data = await Bank.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteBank = async (req,res)=>{
    try {
        const data = await Bank.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}