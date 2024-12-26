const express = require("express")
const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const { findUser } = require("../utility/findUser")

module.exports.registerUser = async (req,res)=>{
    const {userName , email ,password ,contact } = req.body
  
    const ifUser = await findUser(email)

    if(ifUser!=null) res.send("this email already exist")

    bcrypt.genSalt(10,(err,salt)=>{
        if(err)
        {
            return res.send("error in bcrypt password",err)
        }
        bcrypt.hash(password,salt,async (err,hash)=>{
            const user = await  userModel.create({
                userName,
                email,
                password:hash,
                contact
            })

            const token = jwt.sign({email,userId:user._id},process.env.JWT_KEY)
            res.cookie("token",token)
            res.send("Regestration successfull !!")
        })
    })
    
}   

module.exports.logoutUser = async (req,res)=>{
    res.cookie("token","")
    res.send(req.cookie)
}

module.exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await findUser(email); // Assume this is an async function
  
      if (!user) {
        return res.status(400).send("Email or Password is wrong"); // Return after sending the response
      }
  
      // Use bcrypt's promise-based API or wrap it in a promise
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Server error");
        }
  
        if (!result) {
          return res.status(400).send("Email or Password is wrong");
        }
        const token = jwt.sign({email,userId:user._id},process.env.JWT_KEY)
         res.cookie("token",token)
        // If everything is fine, send the success response
        res.status(200).send("Login successful");
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("An unexpected error occurred");
    }
  };
  