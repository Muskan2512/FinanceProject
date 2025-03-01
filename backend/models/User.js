const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
  userName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  image:String,
  totalScore: { type: Number, default: 1 }, 
  level: { type: Number, default: 1 },
})

const User=mongoose.model("User",UserSchema);
module.exports=User