const express=require("express")
const router=express.Router()

const addschoolModel=require("../model/AddschoolModel")
router.post("/add",async(req,res)=>{
    let data=req.body
    let school=new addschoolModel(data)
    let result=await school.save()
    res.json({
        status:"success"
    })
})
router.get("/view",async(req,res)=>{
    let data=await addschoolModel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await addschoolModel.find(input)
    res.json(data)
})

module.exports=router