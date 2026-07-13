import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    fireBaseId:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avtar:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

export default mongoose.model("User",userSchema)