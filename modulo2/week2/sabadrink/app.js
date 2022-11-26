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
//body-parser
app.use(  bodyParser.urlencoded({extended:true})  )


//end Setup


//rutas localhost:3000/ o localhost:3000

app.get("/",(req,res,next)=>{
    const users = [
        {username:"Foggyrocket",address:"Casa"},
        {username:"DylanFs",address:"en tu corazon"},
        {username:"Nova182",address:"en las carnitas"},
        {username:"StarLord",address:"Otro lugar"},
        {username:"Astro",address:"Mole verde"},
        {username:"Cosmo",address:"Hawai"},
      ]
                        // { users:[....] }
    res.render("index",{ users })
})
app.get("/detail",(req,res,next)=>{
    res.json({msg:"Estoy entrando en detail"})
})

// /:nombre
// "/perrito/:name"
/**
 *  req.params = {
 *  name:"valor"
 *  score:""
 *  }
 *  /beer/:id
 */
app.get("/status/:perrito",(req,res,next)=>{
    console.log("req.params:",req.params)
    console.log("req.query en status",req.query)
    res.json({ msg:"ruta con parametros"  })
})
app.get("/demo",(req,res,next)=>{
    //req.query "?"name=valor&age=31 
    console.log("query",req.query)
    res.json({ msg:"ruta con querys"  })
})

app.get("/search",(req,res,next)=>{
    console.log("los querys",req.query)
    res.render("search")
})

app.post("/login",validatePassword,(req,res,next)=>{
    //el req.body tiene todos los datos yo mande
    //del front al back = { .... }
    console.log("req.body",req.body)
        //"archivo",
    const user = {username : req.body.username, address:"Ya casi me voy a comer" }
    res.render("success",{ user })
})

app.get("/perritos/:name/detail/:age/:gender/:size",()=>{
    /**
     *  req.params ={
     *  name:"",
     *  age:"",
     *  gender:"",
     *  size:""
     * }
     */
    res.json({msg:"perritos"})
})
/**rutas con paras siempre al final
app.get("/:pero",(req,res,next)=>{
/    console.log("params",req.params)
//     res.json({msg:"Estoy entrando en /:pero"})

    googleApi({clienteid:615327635217653  ,secret:09213i903i1290i})

 })*/


 //middelware

 function validatePassword(req,res,next){
    //destructurando
    const {password} = req.body

    if(password !== "dylanSexy"){
        res.json({msg:"password incorrecto"})
    }else{
        next()
    }
 }

// Prender el server
app.listen( process.env.port,()=>{
    console.log(`todo chido en el puerto ${process.env.port}`)
})

//https://www.google.com/search?q=beagle&oq=beagle&aqs=chrome.0.0i271j46i433i512j35i39j46i433i512j46i131i433i512j0i512l2j0i433i457i512j0i402j0i512.827j0j4&sourceid=chrome&ie=UTF-8
/**
 *  req.query = {
 *      q:"beagle",
 *     oq:"beagle",
 *     aqs:"chrome.0.0i271j46i433i512j35i39j46i433i512j46i131i433i512j0i512l2j0i433i457i512j0i402j0i512.827j0j4"
 *  }
 */