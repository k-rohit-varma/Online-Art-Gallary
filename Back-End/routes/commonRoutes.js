const express = require("express")
const { registerUser, loginUser, logoutUser } = require("../controllers/authController")
const { isLoggedIn } = require("../middlewares/isLoggedIn")
const router = express.Router()
const {allUseres } = require("../controllers/getAllUsers")

router.get("/",(req,res)=>{
    res.send("this is the common router the home page for all users")
})

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)
router.get("/checkAuth",isLoggedIn,(req, res) => {
    res.status(200).send({user:req.user})
});

router.get("/all",allUseres)

module.exports = router