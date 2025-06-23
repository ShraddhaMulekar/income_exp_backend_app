import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnected from "./dbConfig/dbConfig.js"
dotenv.config()

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json({msg:"checking.."})
})

app.listen(port, async()=>{
    await dbConnected()
    console.log(`server running on http://localhost:${port}`)
})
