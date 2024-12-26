const express = require("express")
const { registerUser, loginUser, logoutUser } = require("../controllers/authController")
const { isLoggedIn } = require("../middlewares/isLoggedIn")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("this is the common router the home page for all users")
})

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)


module.exports = router