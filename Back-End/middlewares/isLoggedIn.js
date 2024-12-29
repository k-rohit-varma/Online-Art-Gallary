const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const { findUser } = require("../utility/findUser")
const userModel = require("../models/userModel")


module.exports.isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token  ;
    console.log("is logged intoken is :"+token)
    if (!token) return res.status(401).send("You need to login first");
  
    try {
      const decode = jwt.verify(token, process.env.JWT_KEY); // Verify token
      const user = await userModel.findOne({ email: decode.email }).select("-password");
  
      if (!user) return res.status(401).send("User not found");
  
      req.user = user; // Attach user info to the request
     return next();
    } catch (error) {
      console.error(error);
      return res.status(401).send("Invalid or expired token");
    }
  };
  
