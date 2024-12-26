const mongoose = require("mongoose")

const sellerModel =mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    contact:Number,
    profile:{
        type :mongoose.Schema.Types.ObjectId ,
        ref : "profileImage"
    }
})

module.exports = mongoose.model("seller",sellerModel)