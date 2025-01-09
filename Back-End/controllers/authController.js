const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const { findUser } = require("../utility/findUser");

module.exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password, contact } = req.body;
    // console.log(userName +"  "+email+"  "+password+"  "+contact)
    const ifUser = await findUser(email);

    if (ifUser) {
      return res.status(409).send("This email already exists"); // 409 Conflict
    }

    // Generate salt and hash password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error in generating salt"); // 500 Internal Server Error
      }

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error in hashing password"); // 500 Internal Server Error
        }

        // Create the new user
        const user = await userModel.create({
          userName,
          email,
          password: hash,
          contact,
        });

        // Generate JWT token
        const token = jwt.sign(
          { email, userId: user._id },
          process.env.JWT_KEY
        );
        // console.log("token in regestered route :"+token)
        // Set the cookie and send a success response
        res.cookie("token", token);
        return res.status(201).send("Registration successful"); // 201 Created
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An unexpected error occurred"); // 500 Internal Server Error
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", ""); // Clear the token cookie
    res.status(200).send("Logged out successfully"); // 200 OK
  } catch (error) {
    console.error(error);
    res.status(500).send("An unexpected error occurred"); // 500 Internal Server Error
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await findUser(email);

    if (!user) {
      return res.status(400).send("Email or Password is wrong"); // 400 Bad Request
    }

    // Compare the password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error"); // 500 Internal Server Error
      }

      if (!result) {
        return res.status(400).send("Email or Password is wrong"); // 400 Bad Request
      }

      // Generate JWT token
      const token = jwt.sign(
        { email, userId: user._id },
        process.env.JWT_KEY
      );

      // Exclude sensitive data like password from the user object
      const userData = {
        userName: user.userName,
        email: user.email,
        contact: user.contact,
        _id: user._id, // Include only necessary fields
      };
      console.log(`User data is : `,userData)
      // Set the cookie and send a success response
      res.cookie("token", token);
      return res.status(200).send({ user: userData }); // Send clean user data
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An unexpected error occurred"); // 500 Internal Server Error
  }
};
