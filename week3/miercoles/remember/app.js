//importar las cosas que necesitamos
require("dotenv").config()
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose")
//mongoose
mongoose
.connect("mongodb://localhost/remember")
.then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
//setup 
const app = express()
app.set("view engine","hbs")
app.set("views",__dirname +"/views")
app.use(express.static("public"))

//partials
hbs.registerPartials(__dirname + "/views/partials")
// Rutas
 app.get("/",(req,res,next)=>{

    // 
    res.render("index")
 })


//ultima linea
app.listen(process.env.PORT,()=>{
    console.log(`ando corriendo en ff ${process.env.PORT}`)
})