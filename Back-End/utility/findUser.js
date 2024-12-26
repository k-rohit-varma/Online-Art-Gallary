const mongoose = require("mongoose")
const userModel = require("../models/userModel")

module.exports.findUser = async(email)=>{
    const user = await userModel.findOne({email})
    return user;
}