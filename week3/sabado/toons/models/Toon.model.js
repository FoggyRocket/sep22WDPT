const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Toon model to whatever makes sense in this case
const toonSchema = new Schema(
  {
    name:{
        type:String,
        unique:true,
        required:[true,"Campo requerido"]//custom message ||  unique:true
    },
    studio:{
        type:String,
        required:[true,"Este campo es necesario"]
    },
    catchPhrase:{
        type:String,
        required:true
    }
  
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Toon = model("Toon", toonSchema);

module.exports = Toon;
