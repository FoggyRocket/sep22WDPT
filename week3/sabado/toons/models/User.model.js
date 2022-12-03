const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    //subDocumento o Embeded
    author:{
      type:{
          name:String,
          age:Number,
          password:{
            required:true,
            type:String,
          } 
      }
    },
    //multiple
    matchs:{
      type:[ 
        {
          name:String,
          age:Number
        }
      ],
      required:true
    },
    //
    otroMatch:[
      {
        name:String,
        age:Number
      }
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
