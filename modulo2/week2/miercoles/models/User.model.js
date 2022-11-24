//1) importar mongoose
// mongoose.Schema || mongoose.model

/**
 *  mogoose = {
 *      Schema:"perro",
 *      model:"otro perro"
 *    .....
 * }
 */
const { Schema,model } = require("mongoose")

//2) crear el Schema({estrcutura},{optiones})

const userSchema = new Schema({

    name:{
        type:String,//<--tipo de dato
        minLength:2
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        //Admin,User
        enum:["Admin","User"],
        default:"User"
    }

},{timestamps:true});
//3)*** exportar el documento
//1)
// const User = model("User",userSchema)
// module.exports = User

//2)
module.exports = model("User",userSchema)



