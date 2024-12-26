const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const { findUser } = require("../utility/findUser")
const userModel = require("../models/userModel")


module.exports.isLoggedIn =async (req,res,next) =>{
    const token = req.cookies.token
  
    if(!token) return res.send("you need to login first")
    const decode = jwt.verify(token,process.env.JWT_KEY)
    const user = await userModel.findOne({email:decode.email}).select("-password")
    console.log(user)
    next()
}