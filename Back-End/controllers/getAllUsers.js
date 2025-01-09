const userModel = require("../models/userModel")


module.exports.allUseres = async(req,res) =>{
   const users = await  userModel.find()
    res.send(users)
}

