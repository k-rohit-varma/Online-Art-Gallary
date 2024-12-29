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
router.get("/checkAuth",isLoggedIn,(req, res) => {
    console.log("check auth function token checking :"+req.cookies.token)
    res.status(200).send("Authenticated")
});

module.exports = router