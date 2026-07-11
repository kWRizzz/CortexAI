import express from 'express'
import dotenv from "dotenv"
import proxy from 'express-http-proxy'

dotenv.config()



const app = express()

app.use("/auth",proxy(process.env.AUTH_SERVICES))

app.get("/",(req,res)=>{
    res.send("dummy api")
})

app.listen(process.env.PORT,()=>{
    console.log(`Gateway running on ${process.env.PORT}`);
})