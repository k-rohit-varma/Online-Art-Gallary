const express = require("express")
const app = express()
const port = 3000
const dotenv = require("dotenv")

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("this is the home page")
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
