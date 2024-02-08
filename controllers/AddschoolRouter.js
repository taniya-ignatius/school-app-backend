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


module.exports=router