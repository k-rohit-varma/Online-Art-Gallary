const express = require("express")
const app = express()
const port = 3000
const dotenv = require("dotenv")
const adminRouter = require("./routes/adminRouter")
const commonRouter = require("./routes/commonRoutes")
const sellerRouter = require("./routes/sellerRouter")
const userRouter = require("./routes/userRouter")
const userModel = require("./models/userModel")
const sellerModel = require("./models/sellerModel")
const profileImage = require("./models/profileImage")
const adminModel = require("./models/adminModel")
const cookie = require("cookie-parser")

dotenv.config()
app.use(express.json())
app.use(cookie())
app.use(express.urlencoded({extended:true}))


app.use("/",commonRouter)
app.use("/admin",adminRouter)
app.use("/seller",sellerRouter)
app.use("/user",userRouter)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
