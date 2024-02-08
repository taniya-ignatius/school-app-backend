const mongoose=require("mongoose")
const schoolSchema=new mongoose.Schema(
    {
        studname:String,
        school:String,
        place:String,
        pin:String,
        class:String
    }
)
module.exports=mongoose.model("school",schoolSchema)