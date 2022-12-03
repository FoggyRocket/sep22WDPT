// 
const {Schema, model} = require("mongoose")

//
const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
    firstName:String,
    lastName:String
},{
    timestamps:true
}) 

// 
module.exports = model("User",userSchema)