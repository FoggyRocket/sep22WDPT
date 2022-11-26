//importamos lo que necistamos para el proyecto
require("dotenv").config();// explicacion despues de la comida
const express = require("express");
const hbs = require("hbs")
const bodyParser = require("body-parser")
// init o ejecuta  express 
const app = express();
// setup
//public 
app.use(express.static("public"))
//hbs  res.sendFile("user/project2/sabadrink/view/index.hbs")
//hbs templates
app.set("views",__dirname + '/views')
app.set("view engine","hbs")
//hbs partials
hbs.registerPartials(__dirname + '/views/partials') //** 
//body-parse
app.use(  bodyParser.urlencoded({extended:true})  )



//rutas localhost:3000/ o localhost:3000
app.get("/",(req,res,next)=>{

    res.render("index")
})



// Prender el server
app.listen(3000,()=>{
    console.log("todo chido en el puerto 3000")
})