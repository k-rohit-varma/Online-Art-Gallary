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
const cors = require('cors')
const { isLoggedIn } = require('./middlewares/isLoggedIn');

dotenv.config()
app.use(
    cors({
      origin: 'http://localhost:5173', // React app URL
      credentials: true, // Allow sending cookies
    })
);
  

app.use(express.json())
app.use(cookie())
app.use(express.urlencoded({extended:true}))


app.use("/",commonRouter)
app.use("/adminRouter",adminRouter)
app.use("/sellerRouter",sellerRouter)
app.use("/userRouter",userRouter)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
