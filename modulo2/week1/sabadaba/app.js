//importar
//const nombrePacake = require("nombrePAcka")
//const {elmeto,otro} = requiere("nombrePAcka")
const express = require("express");//...>


//vamos a crear nuestro server todo gracias al poderoso express
const app = express() //--->

// esto es para mas tarde
//haremos una config para usar css, assets, images
//?
                     //public => nombre de carpeta
app.use( express.static("public") ) //--->


//rutas---
//post -> Enviar info 
//get -> Traer info
//names routes
// "/" => root;  www.github.com/ |   www.github.com
//ruta base = localhost:3000 |  localhost:3000/
   //.get("/routa",(req,res,next)=>{})
//req => request
// res => response
app.get("/",(req,res,next)=>{
    //test de mandar un texto
    //.send("") => para mandar texto unicamente texto
    res.send("Esta es tu ruta '/' root ")
})

//(<h1>texto<h1>)
// "/ruta"
app.get("/about", (req,res,next)=>{
    res.send("<h1> Buenas tardes!!! <h1>")
})

app.get("/contact",(req,res,next)=>{

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact</title>
    </head>
    <body>
        <h1>Pagina de contaacto<h1>
        <ul>
            <li>name: Dylan<li>
            <li>phone: 1234567890<li>
        <ul>
        <img src="https://avatars.githubusercontent.com/u/29002976?v=4"  
            width="100" 
            height="100" />
    </body>
    </html>
    `)
})

//esta es la buena!!!

app.get("/profile",(req,res,next)=>{
    //_ _dirname => (__dirname) => user/dylan/document.....
    //sendFile() => para enviar archivo
    //send() => para enviar texto SOLO TEXTO de preferencia no usar mas adelante
    res.sendFile( __dirname + "/views/contact.html" ) //->>>
})



// hacer que express corra en un port
app.listen(3000,()=>{
    console.log("ando corriendo en el puerto 3000")
})


