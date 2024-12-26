const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/online_art_gallary")

const userModel =mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    contact:Number,
    profile:{
        type :mongoose.Schema.Types.ObjectId ,
        ref : "profileImage",
        default:null
    }
})

module.exports = mongoose.model("user",userModel)