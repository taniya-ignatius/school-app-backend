const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const addschoolRoute=require("./controllers/AddschoolRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Taniya12:TAN12122001@cluster0.vfq897t.mongodb.net/schoolDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/school",addschoolRoute)

app.listen(3001)