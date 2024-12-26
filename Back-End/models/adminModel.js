const mongoose = require("mongoose")

const adminModel =mongoose.Schema({
    userName:String,
    email:String,
    password:String,
})

module.exports = mongoose.model("admin",adminModel)