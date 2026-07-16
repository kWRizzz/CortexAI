import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"


dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("dummy api")
})

app.listen(process.env.PORT,()=>{
    console.log(`AUth ${process.env.PORT}`);
})

